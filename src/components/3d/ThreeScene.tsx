import { useEffect, useRef } from "react";

import * as THREE from "three";

import { threeSceneAssets } from "../../lib/three/sceneAssets";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.setCrossOrigin("anonymous");

    const earthMap = textureLoader.load(threeSceneAssets.textures.earthDiffuse);
    const cloudMap = textureLoader.load(threeSceneAssets.textures.earthClouds);

    const coreGeo = new THREE.SphereGeometry(1, 64, 64);
    const coreMat = new THREE.MeshBasicMaterial({ map: earthMap });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.rotation.y = Math.PI * 0.6;
    mainGroup.add(core);

    const cloudGeo = new THREE.SphereGeometry(1.015, 64, 64);
    const cloudMat = new THREE.MeshBasicMaterial({
      map: cloudMap,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const clouds = new THREE.Mesh(cloudGeo, cloudMat);
    core.add(clouds);

    const outerGeo = new THREE.IcosahedronGeometry(1.4, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x64748b,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const outerShell = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerShell);

    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 1000;
    const posArray = new Float32Array(particleCount * 3);

    for (let index = 0; index < particleCount * 3; index += 1) {
      posArray[index] = (Math.random() - 0.5) * 6;
    }

    particlesGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.008,
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const atmosphere = new THREE.Points(particlesGeo, particlesMat);
    scene.add(atmosphere);

    const createRing = (
      radius: number,
      tiltX: number,
      tiltY: number,
    ): THREE.Mesh<THREE.TorusGeometry, THREE.MeshBasicMaterial> => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.005, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xb8a2ff,
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = tiltX;
      ring.rotation.y = tiltY;
      return ring;
    };

    const ring1 = createRing(1.6, Math.PI / 2, 0);
    const ring2 = createRing(1.8, Math.PI / 3, Math.PI / 6);
    const ring3 = createRing(2, Math.PI / 4, -Math.PI / 6);

    mainGroup.add(ring1);
    mainGroup.add(ring2);
    mainGroup.add(ring3);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event: MouseEvent): void => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    let animationFrameId = 0;
    const startTime = performance.now();

    const animate = (): void => {
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      const elapsedTime = (performance.now() - startTime) / 1000;

      mainGroup.rotation.y += 0.002;
      mainGroup.rotation.x += 0.001;

      outerShell.rotation.y -= 0.001;
      atmosphere.rotation.y += 0.0005;

      ring1.rotation.z += 0.002;
      ring2.rotation.z -= 0.002;
      ring3.rotation.z += 0.001;

      mainGroup.rotation.y += 0.05 * (targetX - mainGroup.rotation.y);
      mainGroup.rotation.x += 0.05 * (targetY - mainGroup.rotation.x);

      const scale = 1 + Math.sin(elapsedTime * 0.5) * 0.01;
      core.scale.set(scale, scale, scale);
      outerShell.scale.set(scale * 1.05, scale * 1.05, scale * 1.05);

      clouds.rotation.y += 0.0005;

      const style = getComputedStyle(document.documentElement);
      const colorHex = style.getPropertyValue("--accent").trim();
      const colorObj = new THREE.Color(colorHex);

      ring1.material.color.lerp(colorObj, 0.05);
      ring2.material.color.lerp(colorObj, 0.05);
      ring3.material.color.lerp(colorObj, 0.05);

      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    const handleResize = (): void => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();

          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }

        if (object instanceof THREE.Points) {
          object.geometry.dispose();

          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      earthMap.dispose();
      cloudMap.dispose();
      renderer.dispose();
      container.innerHTML = "";
    };
  }, []);

  return <div id="webgl-container" ref={containerRef} />;
}

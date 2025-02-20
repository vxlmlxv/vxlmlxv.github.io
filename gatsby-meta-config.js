module.exports = {
  title: `YE SEUL LEE`,
  description: `Evening Primroses`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://vxlmlxv.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `https://github.com/qwdbwp/qwdbwp.github.io.git`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `이예슬`,
    bio: {
      role: `개발자`,
      description: ['ENTP', '성장하는', '소통하는'],
      thumbnail: 'memoticon.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/vxlmlxv`,
      linkedIn: `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `iqwdbwpi@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '2023.01.29',
        activity: '개발 블로그',
        links: {
          github: 'https://github.com/vxlmlxv',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: 'https://vxlmlxv.github.io/',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.02 ~',
        activity: '개인 블로그 개발 및 운영',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      // {
      //   title: '개발 블로그 테마 개발',
      //   description:
      //     '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
      //   techStack: ['gatsby', 'react'],
      //   thumbnailUrl: 'blog.png',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
    ],
  },
};

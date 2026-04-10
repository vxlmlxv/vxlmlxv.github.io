import { useEffect, useState } from "react";

function getCurrentTime(): string {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function useClock(): string {
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    const updateClock = (): void => {
      setTime(getCurrentTime());
    };

    updateClock();
    const interval = window.setInterval(updateClock, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return time;
}

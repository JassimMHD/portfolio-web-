import { useState, useEffect } from "react";

export default function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

  return (
    <div className="relative w-48 h-48 rounded-full border border-gray-400 flex items-center justify-center bg-white shadow">
      {/* Hour hand */}
      <div
        className="absolute w-1 h-12 bg-gray-800 origin-bottom"
        style={{ transform: `rotate(${hourDeg}deg)` }}
      />
      {/* Minute hand */}
      <div
        className="absolute w-0.5 h-16 bg-gray-700 origin-bottom"
        style={{ transform: `rotate(${minuteDeg}deg)` }}
      />
      {/* Second hand */}
      <div
        className="absolute w-0.5 h-20 bg-gray-500 origin-bottom"
        style={{ transform: `rotate(${secondDeg}deg)` }}
      />
      {/* Center dot */}
      <div className="absolute w-2 h-2 bg-gray-700 rounded-full"></div>

      {/* Clock ticks */}
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-0.5 ${
            i % 5 === 0 ? "h-3 bg-gray-700" : "h-2 bg-gray-400"
          }`}
          style={{
            transform: `rotate(${i * 6}deg) translateY(-90px)`,
          }}
        />
      ))}
    </div>
  );
}

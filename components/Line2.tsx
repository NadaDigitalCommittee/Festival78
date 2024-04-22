"use client";
import { useEffect, useRef } from "react";

export const Line2 = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;
    const initCanvasSize = (canvasElem: HTMLCanvasElement) => {
      canvasElem.width = canvasElem.parentElement!.clientWidth;
      canvasElem.height = canvasElem.parentElement!.clientHeight;
    };
    initCanvasSize(canvas);
    const wavesCount = 5;
    const waveDeterminant = Array.from({ length: 6 }, () => {
      return Array.from({ length: 6 }, () => Math.random());
    });
    const drawWave = (time: number, N: number) => {
      const width = canvas.width;
      const height = canvas.height;
      const rotateWave = (_x: number, _y: number, _angle: number) => {
        return [
          (_x - width / 2) * Math.cos(_angle) -
            (_y - height / 2) * Math.sin(_angle) +
            width / 2,
          (_x - width / 2) * Math.sin(_angle) +
            (_y - height / 2) * Math.cos(_angle) +
            height / 2,
        ] as const;
      };
      context.clearRect(0, 0, width, height);
      for (let i = 0; i < N; i++) {
        const localTimeScale = time / (2400 + 500 * waveDeterminant[i][0]);
        const frequency = (1 + waveDeterminant[i][1]) / 300;
        const amplitude =
          40 * (1 + Math.sin(localTimeScale / 3) * waveDeterminant[i][2]);
        const angle =
          ((waveDeterminant[i][3] - 0.5) * Math.PI) / 4 +
          (1 / 8) * waveDeterminant[i][4] * Math.sin(localTimeScale / 6);
        const calcWaveY = (_x: number) => {
          return (
            Math.sin(_x * frequency + localTimeScale) * amplitude +
            (height * 3) / 5 +
            ((waveDeterminant[i][5] - 0.5) * height) / 4
          );
        };
        context.beginPath();
        context.moveTo(...rotateWave(0, calcWaveY(0), angle));
        for (let x = 0; x < width; x++) {
          const y = calcWaveY(x);
          context.lineTo(...rotateWave(x, y, angle));
        }
        context.strokeStyle = "#ff500c";
        context.lineWidth = 1;
        context.stroke();
      }
    };
    const startTime = performance.now();
    const animate = () => {
      const currentTime = performance.now();
      drawWave(currentTime - startTime, wavesCount);
      requestAnimationFrame(animate);
    };
    animate();

    const resizeListener = () => {
      initCanvasSize(canvas);
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  return <canvas ref={canvasRef} className="h-full w-full" />;
};

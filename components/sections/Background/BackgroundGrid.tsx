"use client";

import { useEffect, useRef } from "react";

export function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const squareSize = 48; 
    const speed = 0.3; // Kecepatan gerak grid dan gradient

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      canvas.width = rect?.width || window.innerWidth;
      canvas.height = rect?.height || window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Gunakan akumulator total agar posisi lingkaran bergerak tanpa batas (tidak di-reset oleh % squareSize)
    let totalOffsetX = 0;
    let totalOffsetY = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Tambah pergerakan akumulatif
      totalOffsetX += speed;
      totalOffsetY += speed;

      // Sumbu koordinat grid di-loop menggunakan modulo agar tidak putus
      const gridOffsetX = totalOffsetX % squareSize;
      const gridOffsetY = totalOffsetY % squareSize;

      // --- 1. MENGGAMBAR RADIAL GRADIENT YANG BERGERAK ---
      ctx.save();
      
      // Definisikan 3 lingkaran cahaya sesuai posisi asli Anda, ditambah totalOffset agar ikut berjalan
      const gradients = [
        {
          x: canvas.width * 0.2 + totalOffsetX,
          y: canvas.height * 0.1 + totalOffsetY,
          radius: 900,
          color: "rgba(26, 26, 26, 0.4)",
        },
        {
          x: canvas.width * 0.8 + totalOffsetX,
          y: canvas.height * 0.3 + totalOffsetY,
          radius: 800,
          color: "rgba(26, 26, 26, 0.3)",
        },
        {
          x: canvas.width * 0.5 + totalOffsetX,
          y: canvas.height * 0.9 + totalOffsetY,
          radius: 700,
          color: "rgba(26, 26, 26, 0.3)",
        },
      ];

      // Gambar masing-masing sorotan cahaya ke canvas menggunakan mode blend 'screen' / 'source-over'
      gradients.forEach((grad) => {
        const radialGrad = ctx.createRadialGradient(
          grad.x, grad.y, 0,          // Titik pusat lingkaran dalam
          grad.x, grad.y, grad.radius // Titik pusat lingkaran luar
        );
        radialGrad.addColorStop(0, grad.color);
        radialGrad.addColorStop(0.6, "transparent");

        ctx.fillStyle = radialGrad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
      ctx.restore();

      // --- 2. MENGGAMBAR GRID BERGERAK ---
      const startX = -squareSize;
      const startY = -squareSize;
      const endX = canvas.width + squareSize;
      const endY = canvas.height + squareSize;

      for (let x = startX; x < endX; x += squareSize) {
        for (let y = startY; y < endY; y += squareSize) {
          const currentX = x + gridOffsetX;
          const currentY = y + gridOffsetY;

          ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
          ctx.lineWidth = 1;
          ctx.strokeRect(currentX, currentY, squareSize, squareSize);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Fungsi pembersihan saat komponen dibongkar (Unmount)
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Array dependensi kosong agar animasi berjalan konstan

  return (
    <div aria-hidden className="absolute inset-0 z-0">
      {/* Cukup satu Canvas untuk menggambar Grid sekaligus Gradient Bergerak */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />
    </div>
  );
}

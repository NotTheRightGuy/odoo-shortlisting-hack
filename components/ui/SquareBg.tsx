import React from "react";

type SquareSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeMap: Record<SquareSize, number> = {
  xs: 0.8,
  sm: 1,
  md: 1.5,
  lg: 2,
  xl: 2.5,
};

type SquareGridFadedProps = {
  squareSize?: SquareSize | number;
  faded?: boolean;
  children?: React.ReactNode;
};

export const SquareGridFaded = ({
  squareSize = "md",
  faded = false,
  children,
}: SquareGridFadedProps) => {
  const size =
    typeof squareSize === "number" ? squareSize : sizeMap[squareSize];
  const gridSize = `${size}em ${size}em`;

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-black invert">
      {/* Grid */}
      <div
        className="w-full h-full absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: gridSize,
        }}
      />

      {/* Text */}
      <div className="text-8xl font-extrabold tracking-tight text-center font-geist w-fit h-fit text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-50/60 absolute inset-0 m-auto z-[1000] invert">
        {children}
      </div>

      {/* Fade out mask */}
      {faded && (
        <div
          className="w-full h-full absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 20%, black 80%)",
            mixBlendMode: "multiply",
          }}
        />
      )}
    </div>
  );
};

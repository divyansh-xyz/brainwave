export const GradientLight = () => {
  return (
    <div 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-1" 
      style={{
        background: "radial-gradient(circle at 50% 50%, rgba(40, 32, 108, 1) 0%, rgba(40, 32, 108, 0) 70%)",
      }}
    />
  );
};
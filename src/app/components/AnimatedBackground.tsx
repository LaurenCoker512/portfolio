const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-10 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter opacity-20 animate-float"></div>
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;

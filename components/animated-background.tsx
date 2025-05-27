import "@/assets/css/animated-background.css";

export default function AnimatedBackground() {
  return (
    <div className="w-full h-[100vh] fixed z-0">
      {/* FIRST CONTAINER */}
      <div
        className="w-[200px] absolute -top-6 left-0 aspect-square bg-[#4c8be3] rounded-full"
        style={{
          boxShadow: "0 0 0 100px #4c8be3",
        }}
      ></div>

      {/* SECOND CONTAINER */}
      <div
        className="w-[200px] absolute -bottom-0 right-0 aspect-square bg-[#4c54e3] rounded-full"
        style={{
          boxShadow: "0 0 0 100px #4c54e3",
        }}
      ></div>
    </div>
  );
}

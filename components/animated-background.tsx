import "@/assets/css/animated-background.css";

export default function AnimatedBackground() {
  return (
    <div className="w-full h-[100vh] fixed z-0">
      {/* FIRST CONTAINER */}
      <div
        className="w-[175px] md:w-[250px] absolute -top-0 left-0 aspect-square bg-[#4c8be3] rounded-md moving-bg"
        style={{
          boxShadow: "0 0 0 100px #4c8be3",
        }}
      ></div>

      {/* SECOND CONTAINER */}
      <div
        className="w-[175px] md:w-[250px] absolute -bottom-0 right-0 aspect-square bg-[#4c54e3] rounded-md moving-bg"
        style={{
          boxShadow: "0 0 0 100px #4c54e3",
        }}
      ></div>
    </div>
  );
}

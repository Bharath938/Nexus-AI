import PurpleButton from "./ui/Button/PurpleButton";
import WhiteButton from "./ui/Button/WhiteButton";

function Hero() {
  return (
    <>
      <main className="flex justify-center items-center flex-col gap-4 min-h-[70vh]">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-4 max-w-140 text-center leading-tight">
            <h1 className="text-2xl md:text-5xl lg:7xl">
              AI Sales Management for tool Modern Teams
            </h1>
            <p className="text-secondary-text text-sm md:text-xl lg:text-2xl">
              AI Sales Management gives today’s teams a smarter, faster way to
              sell. It automates routine tasks, tracks every lead
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4  font-medium">
            <PurpleButton buttonText="Book A Free Demo" />
            <WhiteButton buttonText="Get 14 Days Free Trail" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;

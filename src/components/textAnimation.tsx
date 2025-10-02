import BlurText from "./blurtext.tsx";

const handleAnimationComplete = () => {
  console.log("Animation complete!");
};

export default function TextAnimation() {
  return (
    <div className="flex flex-wrap justify-center text-5xl font-bold text-gray-900 mb-8">
      <BlurText
        text="Fundacion Union"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="mr-2 text-8xl"
      />
      <BlurText
        text="Wall-E"
        delay={300}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-blue-500"
      />
    </div>
  );
}

import BlurText from "./blurText.tsx";
import TextType from "./textType.tsx";

const handleAnimationComplete = () => {
  console.log("Animation complete!");
};

export default function TextAnimation() {
  return (
    <div className="flex flex-wrap justify-center text-5xl font-bold text-gray-900 mb-8 ml-36">
      <BlurText
        text="Transformando vidas,"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="mr-2 text-6xl"
      />

      <BlurText
        text="construyendo futuros"
        delay={300}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-blue-500 text-6xl"
      />
    </div>
  );
}

export function Quote() {
  return (
      <TextType
        text={["Cada niño es una promesa de esperanza, un sueño por cumplir, y una luz que merece brillar en este mundo."]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
  );
}

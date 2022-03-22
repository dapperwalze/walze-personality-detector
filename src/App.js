import React, { useState } from "react";
import anime from "animejs";
import Intro from "./components/Intro";
import Question from "./components/Question";

const App = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  let $showQuestion = showQuestion;

  const renderIntro = () => {
    return <Intro _onStartClick={_onStartClick} title="Personality Test" />;
  };

  const renderQuestion = () => {
    return <Question />;
  };

  const _onStartClick = () => {
    animateOut();
    setTimeout(() => setShowQuestion((prev) => !prev), 1000);
  };

  const animateOut = () => {
    setTimeout(
      () =>
        anime({
          targets: ".card",
          translateX: "150%",
          elasticity: function (el, i, l) {
            return 200 + i * 200;
          },
        }),
      200
    );
  };

  if ($showQuestion) {
    return renderQuestion();
  }
  return renderIntro();
};

export default App;

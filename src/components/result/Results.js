import React, { useState } from "react";
import Colors from "../result/Colors";
import Letters from "../result/Letters";
import Briggs from "../result/Briggs";

const Results = (props) => {
  const [state, setState] = useState({
    showColorsResult: true,
    showLettersResult: false,
    showBriggsResult: false,
  });

  const renderResultColors = () => {
    return <Colors _onNextClick={_onNextClick} />;
  };

  const renderResultLetters = () => {
    return <Letters _onNextClick={_onNextClick} />;
  };

  const renderBriggsResult = () => {
    return <Briggs />;
  };

  const _onNextClick = () => {
    let showColorsResult = state.showColorsResult;
    let showLettersResult = state.showLettersResult;
    let showBriggsResult = state.showBriggsResult;

    if (showColorsResult) {
      setTimeout(() => {
        setState(
          Object.assign({}, state, {
            showColorsResult: !showColorsResult,
            showLettersResult: !showLettersResult,
          })
        );
      }, 800);
    } else if (showLettersResult) {
      setTimeout(() => {
        setState(
          Object.assign({}, state, {
            showLettersResult: !showLettersResult,
            showBriggsResult: !showBriggsResult,
          })
        );
      }, 800);
    }
  };

  let showColorsResult = state.showColorsResult;
  let showLettersResult = state.showLettersResult;
  let showBriggsResult = state.showBriggsResult;

  if (showColorsResult) {
    return renderResultColors();
  } else if (showLettersResult) {
    return renderResultLetters();
  } else if (showBriggsResult) {
    return renderBriggsResult();
  }
};

export default Results;

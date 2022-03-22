import React, { useState } from "react";
import { BrownDef, GreenDef, BlueDef, RedDef } from "../definitions/ColorsDef";
import { Wrapper } from "../utils/ResultWrapper";
import { NextBtn } from "../utils/Buttons";

const Colors = (props) => {
  const [state, setState] = useState({
    showBrownDef: false,
    showGreenDef: false,
    showBlueDef: false,
    showRedDef: false,
  });

  const renderNextBtn = () => {
    return (
      <NextBtn onClick={props._onNextClick}>
        <span>Next</span>
        <div className="icon">
          <i className="fa fa-chevron-right" />
        </div>
      </NextBtn>
    );
  };

  const renderBrownDef = () => {
    return (
      <BrownDef
        title={"Brown Type Definition"}
        content={`You are a Builder. You enjoy leading, creating and working hard.
                  You are a traditional person with respect for authority.
                  Your strengths are your diligence, directness and practicality.
                  Your weaknesses are your lack of tact, patience, and difficulty with abstractions.`}
        onBackClick={onBrownDefClick}
      />
    );
  };

  const renderGreenDef = () => {
    return (
      <GreenDef
        title={"Green Type Definition"}
        content={`You are a Planner. You enjoy dreaming, plotting and innovating.
                  You tend to spend a lot of time thinking.
                  Your strengths are your vision, objectiveness and attention to detail.
                  Your weaknesses are your difficulty in putting yourself in the current moment and lack of practicality and speed.`}
        onBackClick={onGreenDefClick}
      />
    );
  };

  const renderBlueDef = () => {
    return (
      <BlueDef
        title={"Blue Type Definition"}
        content={`You are a Relater. You enjoy chatting, romance and spending time with others.
                You are an empathetic person who tends to put the needs of others above your own.
                Your strengths are your sympathy, openness and awareness of your own emotions.
                Your weaknesses are your subjectivity, pliability and manipulability.`}
        onBackClick={onBlueDefClick}
      />
    );
  };

  const renderRedDef = () => {
    return (
      <RedDef
        title={"Red Type Definition"}
        content={`You are an Adventurer. You enjoy action, excitement and drama.
                  You easily accept change and are spontaneous.
                  Your strengths are your tenacity, fearlessness and adaptability.
                  Your weaknesses are your carelessness and lack of focus and diligence.`}
        onBackClick={onRedDefClick}
      />
    );
  };

  const onBrownDefClick = () => {
    let showBrownDef = state.showBrownDef;
    setState(Object.assign({}, state, { showBrownDef: !showBrownDef }));
  };

  const onGreenDefClick = () => {
    let showGreenDef = state.showGreenDef;
    setState(Object.assign({}, state, { showGreenDef: !showGreenDef }));
  };

  const onBlueDefClick = () => {
    let showBlueDef = state.showBlueDef;
    setState(Object.assign({}, state, { showBlueDef: !showBlueDef }));
  };

  const onRedDefClick = () => {
    let showRedDef = state.showRedDef;
    setState(Object.assign({}, state, { showRedDef: !showRedDef }));
  };

  let showBrownDef = state.showBrownDef;
  let showGreenDef = state.showGreenDef;
  let showBlueDef = state.showBlueDef;
  let showRedDef = state.showRedDef;
  if (showBrownDef) {
    return renderBrownDef();
  } else if (showGreenDef) {
    return renderGreenDef();
  } else if (showBlueDef) {
    return renderBlueDef();
  } else if (showRedDef) {
    return renderRedDef();
  }
  return (
    <Wrapper className="jumbotron">
      <h1 className="display-3 title">Colors Result</h1>
      <hr className="my-4" />
      <h2 className="display-6 resultTxt">
        {window.localStorage.getItem("resultColors")}
      </h2>
      <hr className="my-5" />
      <p className="lead">What does this result mean?</p>
      <ul className="list-group">
        <li className="list-group-item" onClick={onBrownDefClick}>
          Brown
          <div className="icon">
            <i className="fa fa-arrow-right" />
          </div>
        </li>
        <li className="list-group-item" onClick={onGreenDefClick}>
          Green
          <div className="icon">
            <i className="fa fa-arrow-right" />
          </div>
        </li>
        <li className="list-group-item" onClick={onBlueDefClick}>
          Blue
          <div className="icon">
            <i className="fa fa-arrow-right" />
          </div>
        </li>
        <li className="list-group-item" onClick={onRedDefClick}>
          Red
          <div className="icon">
            <i className="fa fa-arrow-right" />
          </div>
        </li>
      </ul>
      {renderNextBtn()}
    </Wrapper>
  );
};

export default Colors;

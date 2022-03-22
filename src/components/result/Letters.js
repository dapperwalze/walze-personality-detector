import React, { useState } from "react";
import { Wrapper } from "../utils/ResultWrapper";
import { LetterA, LetterB, LetterC, LetterD } from "../definitions/LettersDef";
import { NextBtn } from "../utils/Buttons";

const Letters = (props) => {
  const [state, setState] = useState({
    showLetterA: false,
    showLetterB: false,
    showLetterC: false,
    showLetterD: false,
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

  const renderLetterA = () => {
    return (
      <LetterA
        title={"Letter A Definition"}
        content={`You are a type A personality. You like to be in control of everything.
                Your strengths are your tenacity, confidence and practicality.
                Your weaknesses are your lack of empathy, discipline and detail-awareness.`}
        onBackClick={onLetterA_Click}
      />
    );
  };

  const renderLetterB = () => {
    return (
      <LetterB
        title={"Letter B Definition"}
        content={`You are a type B personality. You like to be around people.
                Your strengths are your empathy, enthusiasm and spontaneity.
                Your weaknesses are your lack of patience, attention and confidence.`}
        onBackClick={onLetterB_Click}
      />
    );
  };

  const renderLetterC = () => {
    return (
      <LetterC
        title={"Letter C Definition"}
        content={`You are a type C personality. You like to think things through.
                Your strengths are your rationality, objectivity and originality.
                Your weaknesses are your lack of spontaneity, practicality and empathy.`}
        onBackClick={onLetterC_Click}
      />
    );
  };

  const renderLetterD = () => {
    return (
      <LetterD
        title={"Letter D Definition"}
        content={`You are a type D personality. You like to feel safe and secure in life.
                  Your strengths are your organization, compassion and patience.
                  Your weaknesses are your lack of ambition, adaptability and assertiveness.`}
        onBackClick={onLetterD_Click}
      />
    );
  };

  const onLetterA_Click = () => {
    let showLetterA = state.showLetterA;
    setState(Object.assign({}, state, { showLetterA: !showLetterA }));
  };

  const onLetterB_Click = () => {
    let showLetterB = state.showLetterB;
    setState(Object.assign({}, state, { showLetterB: !showLetterB }));
  };

  const onLetterC_Click = () => {
    let showLetterC = state.showLetterC;
    setState(Object.assign({}, state, { showLetterC: !showLetterC }));
  };

  const onLetterD_Click = () => {
    let showLetterD = state.showLetterD;
    setState(Object.assign({}, state, { showLetterD: !showLetterD }));
  };

  let showLetterA = state.showLetterA;
  let showLetterB = state.showLetterB;
  let showLetterC = state.showLetterC;
  let showLetterD = state.showLetterD;

  if (showLetterA) {
    return renderLetterA();
  } else if (showLetterB) {
    return renderLetterB();
  } else if (showLetterC) {
    return renderLetterC();
  } else if (showLetterD) {
    return renderLetterD();
  }
  return (
    <Wrapper>
      <h1 className="display-3 title">Letters Result</h1>
      <hr className="my-4" />
      <h2 className="display-6 resultTxt">
        {window.localStorage.getItem("resultLetters")}
      </h2>
      <hr className="my-5" />
      <p className="lead">What does this result mean?</p>
      <ul className="list-group">
        <li className="list-group-item" onClick={onLetterA_Click}>
          Letter A
          <div className="icon">
            <i className="fa fa-arrow-right" />
          </div>
        </li>
        <li className="list-group-item" onClick={onLetterB_Click}>
          Letter B
          <div className="icon">
            <i className="fa fa-arrow-right" />
          </div>
        </li>
        <li className="list-group-item" onClick={onLetterC_Click}>
          Letter C
          <div className="icon">
            <i className="fa fa-arrow-right" />
          </div>
        </li>
        <li className="list-group-item" onClick={onLetterD_Click}>
          Letter D
          <div className="icon">
            <i className="fa fa-arrow-right" />
          </div>
        </li>
      </ul>
      {renderNextBtn()}
    </Wrapper>
  );
};

export default Letters;

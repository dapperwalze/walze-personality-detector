import React, { useState } from "react";
import { Wrapper } from "../utils/ResultWrapper";
import {
  ISTJ,
  ISFJ,
  INFJ,
  INTJ,
  ISTP,
  ISFP,
  INFP,
  INTP,
  ESTP,
  ESFP,
  ENFP,
  ENTP,
  ESTJ,
  ESFJ,
  ENFJ,
  ENTJ,
} from "../definitions/BriggsDef";
import { RetakeBtn } from "../utils/Buttons";

const Briggs = () => {
  const [state, setState] = useState({
    showISTJ: false,
    showISFJ: false,
    showINFJ: false,
    showINTJ: false,
    showISTP: false,
    showISFP: false,
    showINFP: false,
    showINTP: false,
    showESTP: false,
    showESFP: false,
    showENFP: false,
    showENTP: false,
    showESTJ: false,
    showESFJ: false,
    showENFJ: false,
    showENTJ: false,
  });

  const renderISTJ = () => {
    return (
      <ISTJ
        title={"Introvert | Sensing | Thinking | Judging"}
        content={`You are a type ISTJ, aka The Inspector.
                You tend to be practical and logical above all else.
                You should consider a job in accounting or engineering.`}
        onBackClick={onISTJ_click}
      />
    );
  };

  const renderISFJ = () => {
    return (
      <ISFJ
        title={"Introvert | Sensing | Feeling | Judging"}
        content={`You are a type ISFJ, aka The Protector.
                  You tend to be sympathetic and organized above all else.
                  You should consider a job in childcare or bookkeeping.`}
        onBackClick={onISFJ_click}
      />
    );
  };

  const renderINFJ = () => {
    return (
      <INFJ
        title={"Introvert | iNtuitive | Feeling | Judging"}
        content={`You are a type INFJ, aka The Counselor.
                You tend to be sensitive and creative above all else.
                You should consider a job in education or the arts.`}
        onBackClick={onINFJ_click}
      />
    );
  };

  const renderINTJ = () => {
    return (
      <INTJ
        title={"Introvert | iNtuitive | Thinking | Judging"}
        content={`You are a type INTJ, aka The Mastermind.
                      You tend to be decisive and insightful above all else.
                      You should consider a job in architecture or engineering.`}
        onBackClick={onINTJ_click}
      />
    );
  };

  const renderISTP = () => {
    return (
      <ISTP
        title={"Introvert | Sensing | Thinking | Perceiving"}
        content={`You are a type ISTP, aka The Operator.
                  You tend to be analytical and practical above all else.
                  You should consider a job in computer technology or farming.`}
        onBackClick={onISTP_click}
      />
    );
  };

  const renderISFP = () => {
    return (
      <ISFP
        title={"Introvert | Sensing | Feeling | Perceiving"}
        content={`You are a type ISFP, aka The Composer.
                  You tend to be loyal and adaptable above all else.
                  You should consider a job in teaching or nursing.`}
        onBackClick={onISFP_click}
      />
    );
  };

  const renderINFP = () => {
    return (
      <INFP
        title={"Introvert | iNtuitive | Feeling | Perceiving"}
        content={`You are a type INFP, aka The Healer.
                  You tend to be empathetic and inquisitive above all else.
                  You should consider a job in writing or graphic design.`}
        onBackClick={onINFP_click}
      />
    );
  };

  const renderINTP = () => {
    return (
      <INTP
        title={"Introvert | iNtuitive | Thinking | Perceiving"}
        content={`You are a type INTP, aka The Architect.
                  You tend to be curious and analytical above all else.
                  You should consider a job in architecture or construction.`}
        onBackClick={onINTP_click}
      />
    );
  };

  const renderESTP = () => {
    return (
      <ESTP
        title={"Extrovert | Sensing | Thinking | Perceiving"}
        content={`You are a type ESTP, aka The Promoter.
                  You tend to be energetic and realistic above all else.
                  You should consider a job in sales or forestry.`}
        onBackClick={onESTP_click}
      />
    );
  };

  const renderESFP = () => {
    return (
      <ESFP
        title={"Extrovert | Sensing | Feeling | Perceiving"}
        content={`You are a type ESFP, aka The Performer.
                  You tend to be caring and resourceful above all else.
                  You should consider a job in hospitality or health care.`}
        onBackClick={onESFP_click}
      />
    );
  };

  const renderENFP = () => {
    return (
      <ENFP
        title={"Extrovert | iNtuitive | Feeling | Perceiving"}
        content={`You are a type ENFP, aka The Champion.
                  You tend to be imaginative and insightful above all else.
                  You should consider a job in therapy or acting.`}
        onBackClick={onENFP_click}
      />
    );
  };

  const renderENTP = () => {
    return (
      <ENTP
        title={"Extrovert | iNtuitive | Thinking | Perceiving"}
        content={`You are a type ENTP, aka The Inventor.
                  You tend to be enthusiastic and theoretical above all else.
                  You should consider a job in business or sports.`}
        onBackClick={onENTP_click}
      />
    );
  };

  const renderESTJ = () => {
    return (
      <ESTJ
        title={"Extrovert | Sensing | Thinking | Judging"}
        content={`You are a type ESTJ, aka The Supervisor.
                  You tend to be logical and assertive above all else.
                  You should consider a job in leadership or law.`}
        onBackClick={onESTJ_click}
      />
    );
  };

  const renderESFJ = () => {
    return (
      <ESFJ
        title={"Extrovert | Sensing | Feeling | Judging"}
        content={`You are a type ESFJ, aka The Provider.
                  You tend to be sociable and caring above all else.
                  You should consider a job in childcare or healthcare.`}
        onBackClick={onESFJ_click}
      />
    );
  };

  const renderENFJ = () => {
    return (
      <ENFJ
        title={"Extrovert | iNtuitive | Feeling | Judging"}
        content={`You are a type ENFJ, aka The Teacher.
                  You tend to be passionate and imaginative above all else.
                  You should consider a job in teaching or the arts.`}
        onBackClick={onENFJ_click}
      />
    );
  };

  const renderENTJ = () => {
    return (
      <ENTJ
        title={"Extrovert | iNtuitive | Thinking | Judging"}
        content={`You are a type ENTJ, aka The Field Marshall.
                  You tend to be organized and logical above all else.
                  You should consider a job in law or engineering.`}
        onBackClick={onENTJ_click}
      />
    );
  };
  const onISTJ_click = () => {
    let showISTJ = state.showISTJ;
    setState(Object.assign({}, state, { showISTJ: !showISTJ }));
  };

  const onISFJ_click = () => {
    let showISFJ = state.showISFJ;
    setState(Object.assign({}, state, { showISFJ: !showISFJ }));
  };

  const onINFJ_click = () => {
    let showINFJ = state.showINFJ;
    setState(Object.assign({}, state, { showINFJ: !showINFJ }));
  };

  const onINTJ_click = () => {
    let showINTJ = state.showINTJ;
    setState(Object.assign({}, state, { showINTJ: !showINTJ }));
  };

  const onISTP_click = () => {
    let showISTP = state.showISTP;
    setState(Object.assign({}, state, { showISTP: !showISTP }));
  };

  const onISFP_click = () => {
    let showISFP = state.showISFP;
    setState(Object.assign({}, state, { showISFP: !showISFP }));
  };

  const onINFP_click = () => {
    let showINFP = state.showINFP;
    setState(Object.assign({}, state, { showINFP: !showINFP }));
  };

  const onINTP_click = () => {
    let showINTP = state.showINTP;
    setState(Object.assign({}, state, { showINTP: !showINTP }));
  };

  const onESTP_click = () => {
    let showESTP = state.showESTP;
    setState(Object.assign({}, state, { showESTP: !showESTP }));
  };

  const onESFP_click = () => {
    let showESFP = state.showESFP;
    setState(Object.assign({}, state, { showESFP: !showESFP }));
  };

  const onENFP_click = () => {
    let showENFP = state.showENFP;
    setState(Object.assign({}, state, { showENFP: !showENFP }));
  };

  const onENTP_click = () => {
    let showENTP = state.showENTP;
    setState(Object.assign({}, state, { showENTP: !showENTP }));
  };

  const onESTJ_click = () => {
    let showESTJ = state.showESTJ;
    setState(Object.assign({}, state, { showESTJ: !showESTJ }));
  };

  const onESFJ_click = () => {
    let showESFJ = state.showESFJ;
    setState(Object.assign({}, state, { showESFJ: !showESFJ }));
  };

  const onENFJ_click = () => {
    let showENFJ = state.showENFJ;
    setState(Object.assign({}, state, { showENFJ: !showENFJ }));
  };

  const onENTJ_click = () => {
    let showENTJ = state.showENTJ;
    setState(Object.assign({}, state, { showENTJ: !showENTJ }));
  };

  let showISTJ = state.showISTJ;
  let showISFJ = state.showISFJ;
  let showINFJ = state.showINFJ;
  let showINTJ = state.showINTJ;
  let showISTP = state.showISTP;
  let showISFP = state.showISFP;
  let showINFP = state.showINFP;
  let showINTP = state.showINTP;
  let showESTP = state.showESTP;
  let showESFP = state.showESFP;
  let showENFP = state.showENFP;
  let showENTP = state.showENTP;
  let showESTJ = state.showESTJ;
  let showESFJ = state.showESFJ;
  let showENFJ = state.showENFJ;
  let showENTJ = state.showENTJ;
  if (showISTJ) {
    return renderISTJ();
  } else if (showISFJ) {
    return renderISFJ();
  } else if (showINFJ) {
    return renderINFJ();
  } else if (showINTJ) {
    return renderINTJ();
  } else if (showISTP) {
    return renderISTP();
  } else if (showISFP) {
    return renderISFP();
  } else if (showINFP) {
    return renderINFP();
  } else if (showINTP) {
    return renderINTP();
  } else if (showESTP) {
    return renderESTP();
  } else if (showESFP) {
    return renderESFP();
  } else if (showENFP) {
    return renderENFP();
  } else if (showENTP) {
    return renderENTP();
  } else if (showESTJ) {
    return renderESTJ();
  } else if (showESFJ) {
    return renderESFJ();
  } else if (showENFJ) {
    return renderENFJ();
  } else if (showENTJ) {
    return renderENTJ();
  }
  return (
    <Wrapper>
      <h1 className="display-3 title">Briggs Result</h1>
      <hr className="my-4" />
      <h2 className="display-6 resultTxt">
        {window.localStorage.getItem("resultBriggs")}
      </h2>
      <hr className="my-5" />
      <p className="lead">What does this result mean?</p>
      <ul className="list-group briggs">
        <li className="list-group-item" onClick={onISTJ_click}>
          ISTJ
        </li>
        <li className="list-group-item" onClick={onISFJ_click}>
          ISFJ
        </li>
        <li className="list-group-item" onClick={onINFJ_click}>
          INFJ
        </li>
        <li className="list-group-item" onClick={onINTJ_click}>
          INTJ
        </li>
      </ul>
      <ul className="list-group briggs">
        <li className="list-group-item" onClick={onISTP_click}>
          ISTP
        </li>
        <li className="list-group-item" onClick={onISFP_click}>
          ISFP
        </li>
        <li className="list-group-item" onClick={onINFP_click}>
          INFP
        </li>
        <li className="list-group-item" onClick={onINTP_click}>
          INTP
        </li>
      </ul>
      <ul className="list-group briggs">
        <li className="list-group-item" onClick={onESTP_click}>
          ESTP
        </li>
        <li className="list-group-item" onClick={onESFP_click}>
          ESFP
        </li>
        <li className="list-group-item" onClick={onENFP_click}>
          ENFP
        </li>
        <li className="list-group-item" onClick={onENTP_click}>
          ENTP
        </li>
      </ul>
      <ul className="list-group briggs">
        <li className="list-group-item" onClick={onESTJ_click}>
          ESTJ
        </li>
        <li className="list-group-item" onClick={onESFJ_click}>
          ESFJ
        </li>
        <li className="list-group-item" onClick={onENFJ_click}>
          ENFJ
        </li>
        <li className="list-group-item" onClick={onENTJ_click}>
          ENTJ
        </li>
      </ul>
      <RetakeBtn onClick={() => window.location.reload()}>
        <span>Retake test</span>
        <div className="icon">
          <i className="fa fa-repeat" />
        </div>
      </RetakeBtn>
    </Wrapper>
  );
};

export default Briggs;

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { colors } from "../components/utils/_var";
import Quiz from "../components/quiz/Quiz";
import Results from "../components/result/Results";
import quizQuestions from "../api/quizQuestions";
import { QuestionCard } from "../components/utils/Cards";

const Wrapper = styled.div`
  position: fixed;
  min-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.$colorBg};
`;

const Question = () => {
  const [state, setState] = useState({
    counter: 0,
    questionId: 1,
    question: "",
    answerOptions: [],
    answer: "",
    answersCount: {
      Colors: {
        Green: 10,
        Brown: 10,
        Blue: 10,
        Red: 10,
      },
      Letters: {
        A: 10,
        B: 10,
        C: 10,
        D: 10,
      },
      Briggs: {
        E: 5,
        I: 5,
        S: 5,
        N: 5,
        T: 5,
        F: 5,
        J: 5,
        P: 5,
      },
    },
    resultBriggs: "",
    resultColors: "",
    resultLetters: "",
  });

  useEffect(() => {
    const answerOptions = quizQuestions.map((question) => question.answers);
    if (answerOptions) {
      setState(
        Object.assign({}, state, {
          question: quizQuestions[0].question,
          answerOptions: answerOptions[0],
        })
      );
    }
  }, []);

  // setting the answer based on the user’s selection
  const handleSetUserAnswer = (answer) => {
    const answersCount = state.answersCount;
    let applyAnswer = (answer) => {
      const answer_array = answer.split(",");
      let briggsAnswer = answer_array[0];
      let colorsAnswer = answer_array[1];
      let lettersAnswer = answer_array[2];
      if (answer_array.length === 3) {
        answersCount["Briggs"][briggsAnswer] += 1;
        answersCount["Colors"][colorsAnswer] += 1;
        answersCount["Letters"][lettersAnswer] += 1;
      } else if (answer_array.length === 4) {
        answersCount["Briggs"][briggsAnswer] -= 1;
        answersCount["Colors"][colorsAnswer] -= 1;
        answersCount["Letters"][lettersAnswer] -= 1;
      }
      return answersCount;
    };
    setState(
      Object.assign({}, state, {
        answersCount: applyAnswer(answer),
        answer: answer,
      })
    );
  };

  // increment the counter and questionId state
  const handleSetNextQuestion = () => {
    const counter = state.counter + 1;
    const questionId = state.questionId + 1;
    setState(
      Object.assign({}, state, {
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: "",
      })
    );
  };

  // setting the answer and then setting the next question
  const handleAnswerSelected = (event) => {
    handleSetUserAnswer(event.currentTarget.value);
    if (state.questionId < quizQuestions.length) {
      setTimeout(() => handleSetNextQuestion(), 800);
    } else {
      setTimeout(
        () =>
          handleSetResults(
            getColorsResults(),
            getLettersResults(),
            getBriggsResults()
          ),
        800
      );
    }
  };

  // ===========================================================================
  //                        get results
  // ===========================================================================
  const getBriggsResults = useCallback(() => {
    const answerCount = state.answersCount;
    const briggsAnswer = answerCount["Briggs"];

    // const answersCountKeysBriggs = Object.keys(briggsAnswer);
    // const answersCountValuesBriggs = answersCountKeysBriggs.map(
    //   (key) => briggsAnswer[key]
    // );

    let briggsType = "";
    if (briggsAnswer.E >= briggsAnswer.I) {
      briggsType += "E";
    } else briggsType += "I";
    if (briggsAnswer.S >= briggsAnswer.N) {
      briggsType += "S";
    } else briggsType += "N";
    if (briggsAnswer.T >= briggsAnswer.F) {
      briggsType += "T";
    } else briggsType += "F";
    if (briggsAnswer.J >= briggsAnswer.P) {
      briggsType += "J";
    } else briggsType += "P";
    return briggsType;
  }, []);

  const getColorsResults = useCallback(() => {
    const answersCount = state.answersCount;
    const colorsAnswer = answersCount["Colors"];
    const answersCountKeysColors = Object.keys(colorsAnswer);
    const answersCountValuesColors = answersCountKeysColors.map(
      (key) => colorsAnswer[key]
    );
    const maxAnswerCountColors = Math.max.apply(null, answersCountValuesColors);
    return answersCountKeysColors.filter(
      (key) => colorsAnswer[key] === maxAnswerCountColors
    );
  }, []);

  const getLettersResults = useCallback(() => {
    const answersCount = state.answersCount;
    const lettersAnswer = answersCount["Letters"];
    const answersCountKeysLetters = Object.keys(lettersAnswer);
    const answersCountValuesLetters = answersCountKeysLetters.map(
      (key) => lettersAnswer[key]
    );
    const maxAnswerCountLetters = Math.max.apply(
      null,
      answersCountValuesLetters
    );
    return answersCountKeysLetters.filter(
      (key) => lettersAnswer[key] === maxAnswerCountLetters
    );
  }, []);

  // ===========================================================================
  //                        set results
  // ===========================================================================
  const handleSetResults = useCallback(
    (resultColors, resultLetters, resultBriggs) => {
      if (resultColors.length >= 1) {
        setState(Object.assign({}, state, { resultColors: resultColors[0] }));
        window.localStorage.setItem("resultColors", resultColors[0]);
      }
      if (resultLetters.length >= 1) {
        setState(Object.assign({}, state, { resultLetters: resultLetters[0] }));
        window.localStorage.setItem("resultLetters", resultLetters[0]);
      }
      if (resultBriggs.length >= 1) {
        setState(Object.assign({}, state, { resultBriggs: resultBriggs }));
        window.localStorage.setItem("resultBriggs", resultBriggs);
      }
    },
    []
  );

  // ===========================================================================
  //                    functions to render quiz
  // ===========================================================================
  const renderQuiz = () => {
    return (
      <Quiz
        answer={state.answer}
        answerOptions={state.answerOptions}
        questionId={state.questionId}
        question={state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={handleAnswerSelected}
      />
    );
  };

  // ===========================================================================
  //                    functions to render result
  // ===========================================================================
  const renderResult = () => {
    return <Results />;
  };

  // ===========================================================================
  //                       render this question page
  // ===========================================================================

  let resultBriggs = state.resultBriggs;
  if (resultBriggs) {
    return renderResult();
  }
  return (
    <Wrapper className="container">
      <QuestionCard>
        <div className="corner" />
        <div className="corner" />
        <div className="corner" />
        <div className="corner" />
        {renderQuiz()}
      </QuestionCard>
    </Wrapper>
  );
};

export default Question;

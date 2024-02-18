import React, { useState } from "react";
import questions from "./Questions";
import Score from "./Score";

const Quiz = ({increase}) => {
  const [count, setcount] = useState(0);

  const [rightAnswer, setRightAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [value, setvalue] = useState();

  // function increasecount() {
  //   if (count === 9) {
  //     setcount(0);
  //   } else {
  //     setcount(count + 1);
  //   }
  // }

  function selectedvalue(e) {
    let val = e.target.value;
    setvalue(val);
  }

  function submitanswer() {
    if (questions[count].answer === value) {
      setRightAnswer(rightAnswer + 1);
      if (count === 9) {
        // exception hai yrrrr
        setcount(0);
      } else {
        setcount(count + 1);
      }
    } else {
      setWrongAnswer(wrongAnswer + 1);
      if (count === 9) {
        setcount(0);
      } else {
        setcount(count + 1);
      }
    }
    uncheckradio()
  }

  function uncheckradio(){
    let allradio = document.querySelectorAll(".radiobutton");

    allradio.forEach(value => value.checked =false)
  }

  return (
    <div>
      <h2 className="w-[800px] h-auto bg-teal-300 p-6 mx-auto my-20 text-2xl rounded">
        Question {count + 1} :- {questions[count].question}
      </h2>

      <div
        className="options text-white ml-[30%] grid grid-rows-2 grid-flow-col p-10 text-3xl gap-10"
        onChange={selectedvalue}
      >
        <h2>
          <input
            type="radio"
            name="a"
            id=""
            className="w-6 h-8 mr-8 radiobutton"
            value={questions[count].option.option1}
            // checked={true}
          />
          {questions[count].option.option1}
        </h2>
        <h2>
          <input
            type="radio"
            name="a"
            id=""
            className="w-6 h-8 mr-8 radiobutton"
            value={questions[count].option.option2}
            // checked={true}
          />
          {questions[count].option.option2}
        </h2>
        <h2>
          <input
            type="radio"
            name="a"
            id=""
            className="w-6 h-8 mr-8 radiobutton"
            value={questions[count].option.option3}
            // checked={true}
          />
          {questions[count].option.option3}
        </h2>
        <h2>
          <input
            type="radio"
            name="a"
            id=""
            className="w-6 h-8 mr-8 radiobutton"
            value={questions[count].option.option4}
            // checked={true}
          />
          {questions[count].option.option4}
        </h2>
      </div>

      <button
        onClick={submitanswer}
        className="mx-[42%] w-[300px] p-6 bg-violet-400 rounded text-3xl"
      >
        Submit Answer
      </button>

      {count == 9 ? (
        <Score right={rightAnswer} wrong={wrongAnswer} />
      ) : (
        <h2 className="text-white text-center mt-10 text-2xl">
          Submit all questions to see result
        </h2>
      )}

      {/* <Score right={rightAnswer} wrong = {wrongAnswer} /> */}
    </div>
  );
};

export default Quiz;

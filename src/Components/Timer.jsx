import React, { useState } from "react";
import questions from "./Questions";

const Timer = ({action,count}) => {
    const [timer, settimer] = useState(5);
  
        // if (count == questions.length) {
        //     clearTimeout(timeout)
        //     clearTimeout(nextque)
        // }
        //     let timeout = setTimeout(() => {
        //         settimer(timer - 1);
        //         console.log(timer);
        //     }, 1000);
    
        //     let nextque = setTimeout(() => {
        //         action()
        //     }, 5000);
        
    
        // if (timer < 0) {
        //     settimer(5)
        // }
        

    return (
        <div className="flex justify-end mr-52 mt-36 absolute top-[-100px] right-20">
        <div className="w-20 h-20 rounded-full flex justify-center items-center text-white text-3xl bg-red-700">
            {timer}
        </div>
        </div>
    );
};

export default Timer;

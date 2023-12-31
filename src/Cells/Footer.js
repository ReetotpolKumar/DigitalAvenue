import React, { useState } from 'react'
import {
    format,
    subMonths,
    addMonths,
    startOfWeek,
    addDays,
    isSameDay,
    lastDayOfWeek,
    getWeek,
    addWeeks,
    subWeeks
  } from "date-fns";
  import { useRecoilState } from 'recoil';
import { currentMonth1,rowDependencyA,changeWeekHandleA } from '../Recoil/Atom';

function Footer() {
    const [currentMonth,setCurrentMonth] = useRecoilState(currentMonth1)
    const[dependencyValue,setDependencyValue]=useRecoilState(rowDependencyA)
    const[changeWeekHandleString,setChangeWeekHandleString]=useRecoilState(changeWeekHandleA)
    //const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());


    const changeWeekHandle = (btnType) => {
        //console.log("current week", currentWeek);
        if (btnType === "prev") {
          //console.log(subWeeks(currentMonth, 1));
          setCurrentMonth(subWeeks(currentMonth, 1));
          setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
          setDependencyValue(dependencyValue-1)
          setChangeWeekHandleString(btnType)

        }
        if (btnType === "next") {
          //console.log(addWeeks(currentMonth, 1));
          setCurrentMonth(addWeeks(currentMonth, 1));
          setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
          setDependencyValue(dependencyValue+1)
          setChangeWeekHandleString(btnType)
        }
      };
    
  return (
    <div>
       <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
            prev week
          </div>
        </div>
        <div>{currentWeek}</div>
        <div className="col col-end" onClick={() => changeWeekHandle("next")}>
          <div className="icon">next week</div>
        </div>
      </div>
    </div>
  )
}

export default Footer

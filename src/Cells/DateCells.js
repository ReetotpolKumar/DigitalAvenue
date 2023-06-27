import React, { useState } from 'react'
import style from "./DateCells.module.css"
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


export default function DateCells() {

    const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());


    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
         /* <div
            className={`col cell ${
              isSameDay(day, new Date())
                ? "today"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
             /* onDateClickHandle(cloneDay, dayStr);
            }}
          >*/
            formattedDate
           
         
        );
        day = addDays(day, 1);
      }

      
        
          days.map((element)=>rows.push(element))
        
      
      days = [];
    }
    console.log("row",rows)
  return (
    <div>
       <div className={style.date_rows}>{rows.map((element)=><li>{element}</li>)}</div>;
    </div>
  )
}

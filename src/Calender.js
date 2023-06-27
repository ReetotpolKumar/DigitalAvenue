import React, { useState } from 'react'
import style from "./Calender.module.css"
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
import DateCells from './Cells/DateCells';
import Footer from './Cells/Footer';

function Calender() {
const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());


  const dateFormat = "EEE";
  const days = [];
  let startDate = startOfWeek(currentMonth, { weekStartsOn: 0 });
  for (let i = 0; i < 7; i++) {
    days.push(
     
      
        format(addDays(startDate, i), dateFormat)
     
      
    );
    console.log(days)
  }

  return (
    <div>
      <h1>{format(currentMonth, "MMM yyyy")}</h1>
      <div className={style.row}>{days.map((e)=><li>{e}</li>)}</div>;
      <DateCells/>
      <Footer/>
    </div>
  )
}

export default Calender

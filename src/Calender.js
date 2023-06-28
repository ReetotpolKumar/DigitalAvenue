import React, { useEffect, useState } from 'react'
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
import { useRecoilState } from 'recoil';
import { currentMonth1,currentRow1,rowDependencyA,changeWeekHandleA } from './Recoil/Atom';


function Calender() {
const[index,setIndex]=useState(0)
    const [currentMonth,setCurrentMonth] = useRecoilState(currentMonth1);
//const [currentMonth, setCurrentMonth] = useState(new Date());
  //const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  //const [selectedDate, setSelectedDate] = useState(new Date());
  const[row,setRows]=useRecoilState(currentRow1)
  const[dependencyValue,setDependencyValue]=useRecoilState(rowDependencyA)
  const[changeWeekHandleString,setChangeWeekHandleString]=useRecoilState(changeWeekHandleA)
  const[item,setItem]=useState("jj")

  const dateFormat = "EEE";
  const days = [];
  let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
  for (let i = 0; i < 7; i++) {
    days.push(
     
      
        format(addDays(startDate, i), dateFormat)
     
      
    );
  }

useEffect(()=>{takeIndex()})

  function takeIndex ()
  {
    const date = new Date()
    const a=date.getDate().toString()
    console.log( "a",a)
    console.log("rowa",row)
    for(let j=0;j<7;j++)
    {
        if(date<=new Date(`${format(currentMonth, "MMM yyyy")},${row[j]}`))
        {
          setIndex(j-1)
          break;
        }
        else
        {
          

         /* if(changeWeekHandleString==="prev")
          {
            setIndex(8)
          }
          if(changeWeekHandleString==="next")
          {
            setIndex(0)
          }*/
          if(date>new Date(`${format(currentMonth, "MMM yyyy")},${row[0]}`))
          {
            setIndex(8)
            
          }
          else{
            setIndex(0)
          }



        }
    }
    //console.log("index",index)
  
  }
  useEffect(()=>{takeIndex()},[dependencyValue])
  
  console.log(1,row)

function addTask(e){
  console.log(e)
  for(let i=0;i<7;i++)
  {
  if (myData[i].obj_date===e.obj_date)
  {
    myData[i].obj_item="kk"
    console.log(myData)
  }

  }

}
const arr_item=["Add item","Add item","Add item","Add item","Add item","Add item","Add item"]
var myData = [];
row.forEach(function(e, i) {
  myData.push({
    obj_date: e,
    obj_item: arr_item[i]
  })
})
//console.log(myData[0].obj_date)
//console.log(myData)

  return (
    <div className={style.weekTable}>
      <h1>{format(currentMonth, "MMM yyyy")}</h1>
      <table >
          <tr>
          {days.map((e)=><td>{e}</td>)}

          </tr>
         
          <tr>
          {myData.map((e,i)=> <td>{myData[i].obj_date}
          
          <br></br>{index<=i?<button  onClick={() => addTask(e)}>{myData[i].obj_item}</button>:""}</td>)}
          </tr>
          

      </table>
    <DateCells/>
    <br></br>
    
      <Footer/>
    </div>
  )
}

export default Calender

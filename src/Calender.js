import React, { useEffect, useRef, useState } from 'react'
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
  const[inputBox,setInputBox]=useState(false)
  const[text,setText]=useState("")
  const[selectDate,setSelectDate]=useState("")
  const[stateMyData,setStateMyData]=useState([])
  const[dateT,setDateT]=useState()
  const[incr,setIncr]=useState(0)
  const[k,setK]=useState(1)

  
  //console.log(x)
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
     setStateMyData(items);
    }
  }, []);
 
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items2'));
    if (items) {
     setStateMyData(items);
    }
  }, [incr]);

  //console.log(stateMyData)

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
    //console.log( "a",a)
    //console.log("rowa",row)
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
  
  //console.log(1,row)

function addTask(e){
  //console.log(e)
  setSelectDate(e)
  setInputBox(true)
  
  }

//useEffect(()=>{ A() },[])
//console.log(myData[0].obj_date)
//console.log(myData)





const arr_item=["Add item","Add item","Add item","Add item","Add item","Add item","Add item"]
var myData = [];
row.forEach(function(e, i) {
myData.push({
  obj_date: e,
  obj_button: arr_item[i],
  obj_item:""
})
})
const count=useRef(myData)
//console.log("count",count.current)


useEffect(()=>{localStorage.setItem('items2', JSON.stringify([]))},[])
//useEffect(()=>{localStorage.setItem('items2', JSON.stringify())},[incr])
useEffect(()=>{localStorage.setItem('items', JSON.stringify(myData))},)
//localStorage.setItem('items2', JSON.stringify(myData));
//console.log(1111144)




function forSubmit(e)
{
//console.log("9999")

var oldDataitemm = JSON.parse(localStorage.getItem("items"))
let oldData = JSON.parse(localStorage.getItem("items2"))
if(oldData.length==0)
{
  let oldDataitem = JSON.parse(localStorage.getItem("items"))
  localStorage.setItem('items2', JSON.stringify(oldDataitem));
  var oldDataa = JSON.parse(localStorage.getItem("items2"))

//setK(JSON.parse(localStorage.getItem("items")))
//console.log(oldData)

for(let i=0;i<7;i++)
  {
  if (oldDataa[i].obj_date==e.selectDateO)
  {
    oldDataa[i].obj_item=e.textO
    setDateT(e.selectDateO)
   // console.log("00")
   
   
    
  }



}
//console.log(dateT)

//localStorage.setItem("user" , JSON.stringify([...oldData,...data]))

//console.log(oldData)

localStorage.setItem('items2', JSON.stringify(oldDataa));

//setStateMyData(startDate+1)


//setStateMyData(oldData)
//console.log("==",oldData)
//console.log("=",stateMyData)
setIncr(incr+1)
}
else
{
  for(let i=0;i<7;i++)
  {
  if (oldData[i].obj_date==e.selectDateO)
  {
    oldData[i].obj_item=e.textO
    setDateT(e.selectDateO)
   // console.log("00")
   
    
  }

  oldData[i].obj_date=oldDataitemm[i].obj_date



}
//console.log(dateT)

//localStorage.setItem("user" , JSON.stringify([...oldData,...data]))

//console.log(oldData)

localStorage.setItem('items2', JSON.stringify(oldData));

//setStateMyData(startDate+1)


//setStateMyData(oldData)
//console.log("==",oldData)
//console.log("=",stateMyData)
setIncr(incr+1)
setInputBox(false)
}



}

function forDelete(i)

{
  //console.log("kk")
  const arr1=[]
  arr1.push(...stateMyData)
  arr1[i].obj_item=""
  console.log(arr1)
  setStateMyData(arr1)
  
//setStateMyData( stateMyData[i].obj_item="")


  

}
function forComplete(i) {
  console.log(i)
  const arr1=[]
  arr1.push(...stateMyData)
  arr1[i].obj_item=<div style={{color:"green"}}>{stateMyData[i].obj_item}</div>
  setStateMyData(arr1)
  
}
//console.log("2=",stateMyData)


  return (
    <div className={style.weekTable}>
      <h1>{format(currentMonth, "MMM yyyy")}</h1>
      <table >
          <tr>
          {days.map((e)=><td>{e}</td>)}

          </tr>
         
          <tr>
          {myData.map((e,i)=>
          <td>{index==i?<span style={{fontSize:"1.4rem",fontWeight:"bold",fontFamily:"Cursive"}}>{e.obj_date}</span>:<span>{e.obj_date}</span>}
          
          <br></br>{index<=i?<button  onClick={() => addTask(e.obj_date)}>{e.obj_button}</button>:""}{e.obj_item}</td>)}
          </tr>
          

      </table>
    <DateCells/>
    <br></br>
    
      <Footer/>
      {inputBox?<><input type='text'onChange={(e)=>(setText(e.target.value))} className={style.inputBox}></input><button onClick={()=>forSubmit({textO:text,
      selectDateO:selectDate})} className={style.submit}>submit</button></>:""}
      {dateT}
<table>
<tr>

      {stateMyData.map((element)=><td>{element.obj_date}</td>)}
      </tr>
      <tr>
      {stateMyData.map((element,i)=><td>{element.obj_item}<br></br><button onClick={()=>forDelete(i)}>Delete</button><button onClick={()=>forComplete(i)}>Complete</button></td>)}

      </tr>
      </table>
    </div>
  )
}

export default Calender

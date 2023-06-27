import { da } from 'date-fns/esm/locale';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function WeekCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Handle date selection
  const currentDate = new Date();

  // Calculate the start and end dates of the current week
  const firstDayOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
  const lastDayOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6));

  // Format the dates to display in your desired format
  const startDate = firstDayOfWeek.toLocaleDateString('en-US');
 const a=startDate.split("/")
 const b=parseInt(a[1])
 //console.log(b)

 const endDate = lastDayOfWeek.toLocaleDateString('en-US');
 const c=endDate.split("/")
 const d=parseInt(c[1])
 //console.log("kk",d)

const arr=[]
  for(let i=b;i<=d;i++)
  {
    arr.push(i)
  }
console.log(arr)
  


  return (
    <div>
    <p>Current Week: {startDate} - {endDate}</p>
  </div>
  );
}

export default WeekCalendar;











/*import React from 'react';

class CurrentWeek extends React.Component {
  constructor(props) {
    super(props);

    // Get the current date
   
  }

  render() {
    return (
      
    );
  }
}

export default CurrentWeek;*/


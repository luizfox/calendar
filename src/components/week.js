import React from 'react';
import Day from './day';

const isToday = (year, month, day) => {
  let today = new Date();
  if (today.getFullYear() === year && today.getMonth() === month &&
      today.getDate() === day){
    return true;
  } else {
    return false;
  }

}

const Week = (props) => {
  let daysMatrix = props.daysMatrix;
  let month = props.month;
  let year = props.year;
  return daysMatrix.map ((week, weekIndex) => {
    return (
      <tr key={`${week}${weekIndex}`}>
      {printDay(year, week, weekIndex, month)}
      </tr>
    );
  });
}


const printDay = (year, week, weekIndex, month) =>{
  return week.map((day, index) =>{
    let today = isToday (year, month, day);
    return (
      <Day day={day} key={`${index}-${weekIndex}`} index={index} today={today}
        year={year} month={month}
      />
    );
  });
}

export default Week;

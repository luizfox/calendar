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
  return daysMatrix.map ((week, weekIndex) => {
    return (
      <tr key={week}>
      {printDay(week, weekIndex, month)}
      </tr>
    );
  });
}


const printDay = (week, weekIndex, month) =>{
  return week.map((day, index) =>{
    let today = isToday (2018, month, day);
    return (
      <Day day={day} key={`${index}-${weekIndex}`} index={index} today={today}
        year={2018} month={month}
      />
    );
  });
}

export default Week;

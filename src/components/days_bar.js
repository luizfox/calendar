import React from 'react';

const line = () => {
  let days = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
  return days.map((day) => {
    return (<th key={day}>{day}</th>);
  });
};

const DaysBar = () => {

  return (
    <thead className="thead-light">
      <tr>
        {line()}
      </tr>
    </thead>
  );

}

export default DaysBar;

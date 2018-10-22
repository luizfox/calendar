import React from 'react';
import DaysBar from './days_bar';
import Week from './week';


const Month = (props) => {
  let month = props.month;
  let year = props.year;
  let date = new Date(year, month),
    locale = "en-NZ",
    monthName = date.toLocaleString(locale, { month: "long" });
  let firstDay = date.getDay();
  let lastDay = new Date(year, month+1, 0).getDate();

  let daysMatrix = [[0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0]];
  const numberOfLines = daysMatrix.length;
  const numberOfRows = daysMatrix[0].length;
  let currentDay = 1;

  for (let currentLine = 0; currentLine < numberOfLines; currentLine++){
    for (let currentRow = firstDay; currentRow < numberOfRows; currentRow++){
      firstDay = 0;
      daysMatrix[currentLine][currentRow] = currentDay++;
      if (currentDay >= lastDay+1) break;
    }
    if (currentDay >= lastDay+1) break;
  }

  let ret = (
    <div className="col-xs-12 col-md-4">
      <h3 className="monthtitle">{monthName}</h3>
      <table className="table table-striped table-hover table-sm">
        <DaysBar />
        <tbody>
          <Week daysMatrix={daysMatrix} month={month} year={year}/>
        </tbody>
      </table>
    </div>
  );
  return ret;
};

export default Month;

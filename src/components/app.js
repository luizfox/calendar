import React, { Component } from 'react';
import Month from './month';

export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      months: Array.apply(0, Array(12)).map(function(element,index) { return index; }),
      years: Array.apply(0, Array(20)).map(function(element,index) { return index +2000; }),
      selectedYear: new Date().getFullYear()
    };
  }

  printYears(){
    return this.state.years.map ((year) =>{
      return (
        <li key={year}>
          <a href="#" onClick={() => {
            this.setState({selectedYear:year});
            document.getElementById("ddLabel").innerHTML = year;}}>
            {year}
          </a>
          </li>
      )
    });
  }

  dropdown(){
    return (
    <div className="dropdown">
      <button id="ddLabel" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select the year
      <span className="caret"></span></button>
      <ul className="dropdown-menu">
      {this.printYears()}
      </ul>
    </div>
);
  }

  render() {
    return (
      <div>
      {this.dropdown()}
        <div className="container">
          <div className="row">
            {this.state.months.map( month => <Month month={month} key={month}
              year={this.state.selectedYear}/> )}
          </div>
        </div>
      </div>

    );
  }
}

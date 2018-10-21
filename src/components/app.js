import React, { Component } from 'react';
import Month from './month';

export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      months: Array.apply(0, Array(12)).map(function(element,index) { return index; })
    };
  }

  render() {
    return (
      <div class="container">
        <div className="row">
          {this.state.months.map( month => <Month month={month} key={month}/> )}
        </div>
      </div>

    );
  }
}

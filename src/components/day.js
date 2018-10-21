import React, { Component } from 'react';

export default class Day extends Component {
  constructor (props){
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.day === 0){
      return <td></td>;
    }
    let style = "";
    if (this.props.index === 0 || this.props.index === 6){
      style="weekend";
    }

    if (this.props.today == true){
      style+=" table-info";
    }
    return (
      <td className={style}>
        {this.props.day}
      </td>
    );
  }
}

import React, { Component } from 'react';

export default class Day extends Component {
  constructor (props){
    super(props);
    this.state = {
      color: ""
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.dropDownId = this.dropDownId.bind(this);
    this.textId = this.textId.bind(this);
    this.changeColorHandler = this.changeColorHandler.bind(this);
  }

  addStyle(){
    let className = "";
    if (this.props.today == true){
      className+=" currentdate ";
    }
    if (this.props.index === 0 || this.props.index === 6){
      className+="weekend ";
    }
    className+= " dropbtn ";
    className+=" " + this.state.color;
    return className;
  }

  dropDownId(){
    return `dropdown${this.props.year}${this.props.month}${this.props.day}`;
  }

  textId(){
    return `dayText${this.props.year}${this.props.month}${this.props.day}`;
  }

  onClickHandler(event){
    event.preventDefault();
    var element = this.dropDownId();
    document.getElementById(element).classList.toggle("show");

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  changeColorHandler(e){
    e.preventDefault();
  }

  render() {
    if (this.props.day === 0){
      return <td></td>;
    }
    let style = this.addStyle();
    return (
      <td >
        <div id={this.dropDownId()} className="dropdown-content">
          <a href="#" onClick={(e) => {this.setState({color:"holiday"}); this.changeColorHandler(e);}} >Holiday</a>
          <a href="#" onClick={(e) => {this.setState({color:"birthday"}); this.changeColorHandler(e);}}>Birthday</a>
          <a href="#" onClick={(e) => {this.setState({color:"busy"}); this.changeColorHandler(e);}}>Busy</a>
          <a href="#" onClick={(e) => {this.setState({color:"anniversary"}); this.changeColorHandler(e);}}>Anniversary</a>
          <a href="#" onClick={(e) => {this.setState({color:"clean"}); this.changeColorHandler(e);}}>Clear</a>
        </div>
        <a
          id={this.textId()}
          onClick={this.onClickHandler}
          className={style}
          href="#">
            {this.props.day}
        </a>
      </td>
    );
  }
}

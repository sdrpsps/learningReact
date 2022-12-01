import React, { Component } from "react";

class Rcc extends Component {
  /* 类组件 props 可以直接通过实例访问 this.props */
  /* this.state this.setState */
  state = {
    count: 0,
  };

  divRef = React.createRef();

  clickHandler = () => {
    console.log(this.divRef.current);
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div ref={this.divRef}>
        Hello,RCC!
        <h1>State:{this.state.count}</h1>
        <button onClick={this.clickHandler}>+1</button>
        <ul>
          <li>props:</li>
          <li>姓名：{this.props.name}</li>
          <li>年龄：{this.props.age}</li>
          <li>性别：{this.props.sex}</li>
        </ul>
      </div>
    );
  }
}
export default Rcc;

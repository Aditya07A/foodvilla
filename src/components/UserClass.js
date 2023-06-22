import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      // count: 0,
      // count2: 1,
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
    // console.log(this.props.name +"Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name +"child component COmponentDidMount");
    const data = await fetch("https://api.github.com/users/Aditya07A");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    // const { name, location, contact } = this.props;
    // const { count } = this.state;
    // const { count, count2 } = this.state;
    // console.log(this.props.name +"Child Render");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h2>Count : {this.state.count}</h2> */}
        {/* <h2>Count-2 : {count2}</h2>
        <h2>Count : {count}</h2> */}
        {/* never update state variable directly */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <img src={avatar_url}></img>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>contact : @aditya</h4>
        {/* <h4>contact:{contact}</h4> */}
      </div>
    );
  }
}
export default UserClass;

// import User from "./User";
import React from "react";
// import {Component} from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  // class About extends Component{
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("parent component COmponentDidMount");
  }

  render() {
    //   console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>Welcome to About Page !!</h2>
        {/* <User name={"John(functional)"} /> */}
        <UserClass
          name={"John (class)"}
          location={"Hyderabad (class)"}
          contact={"john@gmail.com (class)"}
        />
        {/* <UserClass
          name={"Elon (class)"}
          location={"USA (class)"}
          contact={"elon@gmail.com (class)"}
        /> */}
      </div>
    );
  }
}

export default About;

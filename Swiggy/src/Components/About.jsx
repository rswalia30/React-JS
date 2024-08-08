// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    // ONE:  call
    constructor() {
        super();
        console.log("Parent Constructor");
    }

    // THREE : API call : useEffect() in Functional Components
    componentDidMount() {
        console.log("Parent componentDidMount")
        // this.timer = setInterval(() => {
        //     console.log("Mounting in About");
        // }, 1000);
    }

    componentWillUnmount() {
        // clearInterval(this.timer);
    }

    // TWO
    render() {
        console.log("Parent Render");

        return (
            <div className="container">
                <h1 className="text-center">This is About Component</h1>
                {/* <User name={"Rohit Function"} location={"Amritsar"} /> */}
                <UserClass name={"First"} location={"India"} />
                {/* <UserClass name={"Second"} location={"Amritsar"} />
                <UserClass name={"Third"} location={"Amritsar"} /> */}
            </div>
        )
    }
}

export default About;
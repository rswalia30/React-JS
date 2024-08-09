/* eslint-disable react/prop-types */
import React from "react";
import { GITHUB_USER_API } from "../utils/constants";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cnt: 0,
            cnt2: 1,
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
            }
        }

        console.log(this.props.name + " Child Constructor");
    }

    // API call
    async componentDidMount() {
        console.log(this.props.name + "Child componentDidMount")
        const data = await fetch(GITHUB_USER_API);
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log(this.props.name + "Child Render");

        // const { name, location } = this.props;
        // const { cnt, cnt2 } = this.state;
        const { name, location, avatar_url, followers, following } = this.state.userInfo;

        return (
            <div className="border border-primary border-3 rounded-end p-3 mt-3">
                {/* <button className="btn btn-warning w-100"
                    onClick={() => {
                        this.setState(
                            {
                                cnt: this.state.cnt + 1,
                                cnt2: this.state.cnt2 * 2,
                            }
                        );
                    }}
                >Increase Count / Multiply By 2</button>
                <h2>Count = {this.state.cnt}</h2>
                <h2>Count2 = {this.state.cnt2}</h2> */}

                <div className="row">
                    <div className="col-md-4">
                        <img src={avatar_url} alt="..." className="rounded-circle" />
                    </div>
                    <div className="col-md-8">
                        <h3>Name = {name}</h3>
                        <h3>Location = {location}</h3>
                        <h3>Followers = {followers}</h3>
                        <h3>Following = {following}</h3>
                    </div>
                </div>

            </div>
        )
    }
}

export default UserClass;

/**
 * --------------- MOUNTING --------------
 * Parent Constructor
 * Parent Render
 * 
 * First Child Constructor          (dummy data)
 * First Child Render               (dummy data) 
 * First Child componentDidMount    (API -> state variable update)
 * 
 * Parent componentDidMount
 * 
 * --------------- UPDATING --------------
 * First Child Render               (API data)
 * componentDidUpdate
 * 
 * componentWillUnmount              (About page -> Contact page)
 *  
 */
/* eslint-disable react/prop-types */
import { useState } from "react";

const User = (props) => {
    const [cnt, setCnt] = useState(0);
    const [cnt2] = useState(2);

    const { name, location } = props;

    return (
        <div className="border border-danger border-3 rounded-end p-3">
            <button className="btn btn-primary w-100"
                onClick={() => {
                    setCnt(cnt + 1);
                }}
            >Click Me</button>
            <h2>Count = {cnt}</h2>
            <h2>Count2 = {cnt2}</h2>
            <h3>Name = {name}</h3>
            <h3>Location = {location}</h3>
            <h3>College = Guru Nanak Dev University</h3>
        </div>
    )
}

export default User;
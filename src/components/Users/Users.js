import React, { useState } from 'react';
import "./Users.css";

const Users = (props) => {
    // console.log(props);
    const{name:{first,last},phone,picture:{large,medium,thumbnail},email} = props.user;
    const fullName = `${first} ${last}`;
    const [mobile, setMobile] = useState('');
    const showPhone = () => setMobile(phone);
    const addMembers = props.addMembers;
    
    return (
        <div className="row border p-3 mb-3 align-items-center">
            <div className="col-md-3">
                <img src={large} className="w-100 img-fluid"></img>
            </div>

            <div className="col-md-9 bg-light">
                <div className="user-content p-2">
                    <h3 className="mb-2">{fullName}</h3>
                    {/* <p>Email: {email}</p> */}
                    <p>Phone: {mobile}</p>
                    <div className="btnArea mb-3 mt-3">
                        <button onClick={showPhone} type="button" className="btn btn-outline-primary me-2">Show Phone Number </button>
                        <button onClick={() => addMembers(fullName)} type="button" className="btn btn-primary"> Add Me</button>
                    </div>
                </div>
            </div>  

        </div>
    );
};

export default Users;
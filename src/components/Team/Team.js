import React from 'react';

const Team = (props) => {
    console.log(props.members);
    const members = props.members;
    return (
        <div className="team-container px-4 bg-light"> 
            <div className="d-flex justify-content-between">
                <h3>Team Members</h3>
                <h3>{members.length}</h3>
            </div>
            <ul>
                {
                    members.map(member => <li>{member}</li>)
                }
            </ul>

        </div>
    );
};

export default Team;
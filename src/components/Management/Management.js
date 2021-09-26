import React from 'react';
import { useEffect, useState } from 'react';
import Invitation from '../Invitation/Invitation';
import Writers from '../Writers/Writers';
import './Management.css'

const Management = () => {

    // data loading state
    const [writers, setWriters] = useState([])
    // invitation state
    const [invited, setInvited] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setWriters(data))
    }
        , [])


    const handleInvitaion = (writer) => {

        const invitedWriters = [...invited, writer]
        console.log(invitedWriters);
        setInvited(invitedWriters)
    }


    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            writers.map(writer => <Writers
                                key={writer.key}
                                writer={writer}
                                handleInvitaion={handleInvitaion}
                            ></Writers>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <Invitation
                        invited={invited}
                    ></Invitation>
                </div>
            </div>
        </div>
    );
};

export default Management;
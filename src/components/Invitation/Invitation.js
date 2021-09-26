import React from 'react';

const Invitation = (props) => {
    const { invited } = props;

    // Invitation fees calculation
    const totalFees = (prevValue, currentValue) => prevValue + currentValue.fees;

    const total = invited.reduce(totalFees, 0)

    return (
        <div className="card bg-light mb-3 text-left">
            <div className="card-header text-secondary"><h3>Invitation list</h3></div>
            <div className="card-body text-secondary">
                <h4 className="card-title">Invited: {invited.length}</h4>
                <h5>Total fees:<span className=" text-primary"> ${total}</span></h5>
                <h6>Invited Writers:</h6>
                <ul>{
                    invited.map(writerName => <li>{writerName.name}</li>)
                }
                </ul>
            </div>
        </div>
    );
};

export default Invitation;
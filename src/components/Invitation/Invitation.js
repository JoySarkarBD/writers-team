import React from 'react';

const Invitation = (props) => {
    const { invited } = props;

    // Invitation fees calculation
    const totalFees = (prevValue, currentValue) => prevValue + currentValue.fees;

    const total = invited.reduce(totalFees, 0)

    return (
        <div className="sticky-top">
            <div className="card bg-light mb-3 text-left">
                <div className="card-header text-secondary"><h3>Invitation list</h3></div>
                <div className="card-body text-secondary">
                    <h4 className="card-title">Invited: {invited.length}</h4>
                    <h5>Total fees:<span className=" text-primary"> ${total}</span></h5>
                </div>
            </div>
            {
                invited.map(writerName => <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={writerName.img} className="card-img" alt={writerName.img} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{writerName.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Invitation;
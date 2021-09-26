import React from 'react';
import './Writers.css'

const Writers = (props) => {
    const { name, age, img, country, fees, contact } = props.writer
    return (
        <div className="col-md-4 container">
            <div className="mb-3 mr-4">
                <div className="card card-size">
                    <img src={img} className="card-img-top img mt-3" alt={img} />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <div className="text-left text-secondary">
                            <p className="card-text"><span className="font-weight-bold">Age:</span> {age}</p>
                            <p className="card-text"><span className="font-weight-bold">Country:</span> {country}</p>
                            <p className="card-text"><span className="font-weight-bold">contact:</span> {contact}</p>
                            <h5 className="card-text text-primary"><span className="font-weight-bold">Fees:</span> ${fees}</h5>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button onClick={() => props.handleInvitaion(props.writer)}
                            type="button" className="btn btn-primary w-100">
                            <i className="fas fa-envelope-open mr-1"></i> Invite
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Writers;
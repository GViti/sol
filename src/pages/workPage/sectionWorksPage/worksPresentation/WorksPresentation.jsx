import React from 'react';
import './WorksPresentation.css';
import { works } from "../../../../data/works";


function WorksPresentation() {
    
    return (
        <div className='cont-works'>
            {works.map((work) => (
                <div className="item" key={work.id}>
                    <img src={work.img} alt={`Lavoro ${work.clientName}`} className="imgOverlay"/>
                    <div className="content">
                        <div className="author">Secret of light</div>
                        <div className="title">{work.clientName}</div>
                        <div className="des">{work.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WorksPresentation;

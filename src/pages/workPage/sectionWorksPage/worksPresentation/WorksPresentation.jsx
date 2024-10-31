import React from 'react';
import './WorksPresentation.css';
import { works } from "../../../../data/works";


function WorksPresentation() {
    
    return (
        // <div className='cont-works'>
        //     {works.map((work) => (
        //         <div className="item" key={work.id}>
        //             <img src={work.img} alt={`Lavoro ${work.clientName}`} className="imgOverlay"/>
        //             <div className="content">
        //                 <div className="author">Secret of light</div>
        //                 <div className="title"><h2>{work.clientName}</h2></div>
        //                 <div className="des">{work.description}</div>
        //             </div>
        //         </div>
        //     ))}
        // </div>

        <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
            {works.map((work) => (
                <div className="container_block" key={work.id}>
                    <div className="img_cont">
                        <img className="image" src={work.img} alt={`Lavoro ${work.clientName}`} draggable="false" />
                    </div>
                    <div className="text_container">
                        <div>
                            <h4>{work.clientName}</h4>
                            <hr/>
                        </div>         
                        <p>{work.description}</p>
                    </div> 
                </div>
            ))}
        </div>
    );
}

export default WorksPresentation;


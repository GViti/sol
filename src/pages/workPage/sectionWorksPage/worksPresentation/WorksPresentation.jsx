// import React, { useEffect } from "react";
import React from 'react';
import './WorksPresentation.css';
import WorkView from "../../../../components/elements/workView/workView";
import WorkPreview from "../../../../components/elements/workPreview/workPreview";

function WorksPresentation() {
    // useEffect(() => {
    //     const nextDom = document.getElementById('next');
    //     const prevDom = document.getElementById('prev');
    //     const carouselDom = document.querySelector('.carousel');
    //     const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    
    //     if (!carouselDom || !nextDom || !prevDom || !thumbnailBorderDom) {
    //         console.error('Some required DOM elements are missing');
    //         return;
    //     }
    
    //     const SliderDom = carouselDom.querySelector('.carousel .list');
    //     const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    //     const timeDom = document.querySelector('.carousel .time');
    
    //     if (!SliderDom || !thumbnailItemsDom.length || !timeDom) {
    //         console.error('Some carousel elements are missing');
    //         return;
    //     }
    
    //     thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    //     const timeRunning = 3000;
    //     const timeAutoNext = 10000;
    
    //     const showSlider = (type) => {
    //         const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    //         const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    //         nextDom.disabled = true;
    //         prevDom.disabled = true;
    
    //         if (type === 'next') {
    //             SliderDom.appendChild(SliderItemsDom[0]);
    //             thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    //             carouselDom.classList.add('next');
    //         } else {
    //             SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    //             thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    //             carouselDom.classList.add('prev');
    //         }
    
    //         clearTimeout(runTimeOut);
    //         runTimeOut = setTimeout(() => {
    //             carouselDom.classList.remove('next');
    //             carouselDom.classList.remove('prev');
    //             nextDom.disabled = false;
    //             prevDom.disabled = false;
    //         }, timeRunning);
    
    //         clearTimeout(runNextAuto);
    //         runNextAuto = setTimeout(() => {
    //             nextDom.click();
    //         }, timeAutoNext);
    //     };
    
    //     let runTimeOut = null;
    //     let runNextAuto = setTimeout(() => {
    //         nextDom.click();
    //     }, timeAutoNext);
    
    //     nextDom.onclick = () => {
    //         showSlider('next');
    //     };
    
    //     prevDom.onclick = () => {
    //         showSlider('prev');
    //     };
    
    //     return () => {
    //         clearTimeout(runTimeOut);
    //         clearTimeout(runNextAuto);
    //         nextDom.onclick = null;
    //         prevDom.onclick = null;
    //     };
    // }, []);
    
    return (
        <main>
            <div className="carousel">
                <div className="list">
                    <WorkView></WorkView>
                </div>
                <div className="thumbnail">
                    <WorkPreview></WorkPreview>
                </div>
                <div className="arrows">
                    <button id="prev">{'<'}</button>
                    <button id="next">{'>'}</button>
                </div>
                <div className="time"></div>
            </div>
        </main>
    );
}

export default WorksPresentation;

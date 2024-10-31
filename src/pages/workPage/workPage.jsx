import React, { useEffect } from "react";
import './workPage.css';
import WorksPresentation from './sectionWorksPage/worksPresentation/WorksPresentation.jsx';
import FormContatti from '../../components/Form/form.jsx';

function WorksPage() {
    useEffect(() => {
        const track = document.getElementById("image-track");
        const scroller = document.getElementsByClassName("scroller")[0];

        if (!track || !scroller) return;

        const scrollerHeight = track.clientWidth;
        // const percentageAdjustment = (window.innerWidth / scrollerHeight) * 100;

        scroller.style.height = `${scrollerHeight}px`;

        const handleScroll = () => {
            const maxScroll = scrollerHeight - window.innerHeight;
            const scrollPercentage = (window.scrollY / maxScroll) * -100;
            
            /* ========== OPTION TWO BELOW ==========*/
            //use the code below if the page had just horizontal scroll
            // var scrollPercentage = (window.scrollY / maxScroll) * - (100-percentageAdjustment);

            // Apply transformation to `track`
            track.style.transform = `translate(${scrollPercentage}%, 0%)`;

            for (const image of track.getElementsByClassName("image")) {
                image.style.objectPosition = `${100 + scrollPercentage}% center`;
            }

            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        <div className="scroller">
            <div className="container">
                <WorksPresentation />
            </div>
        </div>
        <FormContatti/>
        </>
    );
}

export default WorksPage;

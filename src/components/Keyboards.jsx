import React from 'react';
import { createStyles, SimpleGrid, Container, Text } from "@mantine/core";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { School, Tie } from 'tabler-icons-react';
const BREAKPOINT = '@media (min-width: 1175px)';
let colorScheme;
let colors;

const useStyles = createStyles((theme, _params, getRef) => {
    colorScheme = theme.colorScheme;
    colors = theme.colors;
    return {
        link: {
            textDecoration: 'none',
            color: "#fff"
        },
        background: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
        header: {
            paddingTop: 20,
            fontSize: 40,
            fontWeight: 600,
            marginLeft: 35,
            [BREAKPOINT]: {
                textAlign: 'center'
            }
        },
        date_text: {
            color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[9]
        },
        invis: {
            opacity: 0,
            zIndex: -1
        }


    }
});



export const Keyboards = () => {
    const { classes, cx } = useStyles();
    const css = `
    body {
        overflow-x: hidden;
    }  
    #image-track {
        display: flex;
        translate: 
        padding: 2vw;
        // transform: translate(10%, 0%); 
        user-select: none; /* -- Prevent image highlighting -- */

    }  
    #image-track > .image {
        width: 30em;
        height: 35em;
        // padding: 0.5em;
        object-fit: cover;
        object-position: 100% center;
    }
    `
    const handleOnDown = e => {
        const track = document.getElementById("image-track");
        track.dataset.mouseDownAt = e.clientX;
    }

    const handleOnUp = () => {
        const track = document.getElementById("image-track");
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    }

    const handleOnMove = e => {
        const track = document.getElementById("image-track");
        if (track.dataset.mouseDownAt === "0") return;
        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth;

        const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        track.dataset.percentage = nextPercentage;
        track.animate({
            transform: `translate(${nextPercentage}%, 0%)`
        }, { duration: 1200, fill: "forwards" });

        for (const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }
    }

    /* -- Had to add extra lines for touch events -- */
    window.onmousedown = e => handleOnDown(e);


    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);

    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);

    window.ontouchmove = e => handleOnMove(e.touches[0]);

    return (
        <div>
            <style>
                {css}
            </style>
            <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0" draggable="false">
                                
                <img className="image" src="https://cdn.discordapp.com/attachments/565880720329801728/758413329101225994/CL9A7485.jpg" draggable="false" />
                <img className="image" src="https://i.redd.it/unwf07wtezy41.jpg" draggable="false" />
                <img className="image" src="https://cdn.discordapp.com/attachments/326293819366834187/1049791993028558868/image0.jpg" draggable="false" />
                <img className="image" src="https://images.squarespace-cdn.com/content/v1/5f68da90297b94613c756dd6/1658334075609-0G5XV7ZT0XX3L6EMLN66/LXI05313+1.jpg?format=1500w" draggable="false" />
                <img className="image" src="https://i.imgur.com/Q7JqGk6.jpg" draggable="false" />
                <img className="image" src="https://i.imgur.com/0eeffxx.jpg" draggable="false" />
                <img className="image" src="https://i.imgur.com/GYLYMqO.jpeg" draggable="false" />

            </div>
        </div>
    )
}
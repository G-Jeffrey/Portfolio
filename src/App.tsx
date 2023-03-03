import React, { useEffect, useState } from 'react';
import './App.css';
import { Nav } from "./components/Navbar"
import { Title } from './components/Title';
import { Footer } from './components/Footer';
import { Skills } from './components/Skill';
import { Education } from './components/Education';
import { Project } from './components/Project';
import { Hobby } from './components/Hobby';
import { MantineProvider, ColorSchemeProvider, createStyles } from '@mantine/core';
import { useToggle, useLocalStorage, useHotkeys } from '@mantine/hooks';
import { Element } from 'react-scroll';

import { Achievement } from './components/Achievements';

import { url } from 'inspector';
import styled, { keyframes } from 'styled-components';

import { Key } from 'tabler-icons-react';

const rotate = keyframes`
  from {
    rotate: 0deg;
  }
  20% {
    1 1.4
  }
  50% {
    scale: 1.4 0.9;
  }
  80% {
    scale: 0.9 1.2;
  }
  to {
    rotate: 360deg;
  }
`
const Blob = styled.div`
  height: 30vmax;
  aspect-ratio: 1;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  position: absolute;
  border-radius: 50%;
  z-index:2;
  // background: linear-gradient(45deg, navy, cyan);
  animation: ${rotate} 10s infinite ease-in-out;
  opacity: 0.8;
`
const Blur = styled.div`
  // height: 100%;
  width: 100%;
  position: absolute;
  z-index: 3;
  backdrop-filter: blur(10vmax);
`

const useStyles = createStyles((theme) => ({
  responsive: {
    marginLeft: `200px`,
    width: '100%-200px',
    [theme.fn.largerThan('lg')]: {
      width: `calc(100%-300px)`,
      marginLeft: `300px`,
    },

    [theme.fn.smallerThan('md')]: {
      width: `100%`,
      marginLeft: `0`,
    },
  },
}));

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<"dark" | "light">({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
  });
  const [mode, toggleMode] = useToggle<"dark" | "light">(colorScheme, ["dark", "light"]);
  const [height, setHeight] = useState(0);
  const toggleNav = () => {
    toggleMode();
    setColorScheme(mode);
    
  };
  useHotkeys([['c', () => {
    toggleNav()
  }]]);
  const { classes } = useStyles();
  useEffect(() => {
    setHeight(document.body.offsetHeight);
    const handleMouseMove = (event: any) => {
      const blob : any= document.getElementById('blob');
      blob.animate({
        left: `${Math.min(document.body.offsetWidth*0.72, Math.max(document.body.offsetWidth*0.05,event.clientX))}px`,
        top: `${Math.min(document.body.offsetHeight*0.80, Math.max(document.body.offsetHeight*0.05,event.pageY))}px`
      }, { duration: 4000, fill: "forwards" });
    };
    const handleResize = () => {
      setHeight(document.body.offsetHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener('mousemove',handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleMode}>
      <MantineProvider theme={{ colorScheme }}>
        <Nav mode={colorScheme} toggleNav={toggleNav} />
        <Blur style={{height:`${height}px`}} id='blur'></Blur>
        {console.log(document.getElementById('blur'))}
        {/* colorScheme === 'dark' ? colorScheme === 'dark' ? "linear-gradient(45deg, navy, cyan);": "linear-gradient(45deg, orange, cyan);"*/}
        <Blob id='blob' style={{backgroundColor: colorScheme === 'dark' ? "#3366ff" : "orange"}}></Blob>
        <div style={{ backgroundColor: colorScheme === 'dark' ? "#25262b" : "#f8f9fa"}} draggable="false">
        <div className={classes.responsive} draggable="false">
          <Element name="background" key={'title'} >
            {<Title theme={colorScheme} />}
          </Element>
          <Element name="education" key={'education'}>
            {<Education />}
          </Element>
          <Element name="skills" key={'skills'} >
            {<Skills theme={colorScheme} />}
          </Element>
          <Element name="projects" key={'project'} >
            {<Project theme={colorScheme} />}
          </Element>
          <Element name="achievements" key={'achievements'} >
            {<Achievement theme={colorScheme} />}
          </Element>
          <Element name="hobby" key={'hobby'}>
          {<Hobby theme={colorScheme}/>}
        </Element>
        {<Footer />}
        </div>
        </div>
      </MantineProvider>
    </ColorSchemeProvider >
  )
}
export default App;
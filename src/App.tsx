import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from "./components/Navbar"
import { Footer } from './components/Footer';
import { Title } from './components/Title';
import { Skills } from './components/Skill';
import { Education } from './components/Education';
import { Project } from './components/Project';
import { Hobby } from './components/Hobby';
import { MantineProvider, ColorSchemeProvider, createStyles } from '@mantine/core';
import { useToggle, useLocalStorage, useHotkeys } from '@mantine/hooks';
import { Element} from 'react-scroll';
import { Achievement } from './components/Achievements';


const useStyles = createStyles((theme) => ({
  responsive: {
    marginLeft: `200px`,
    width: '100%-200px',
    [theme.fn.largerThan('lg')]: {
      width: `calc(100%-300px)`,
      marginLeft: `300px`,
    },
    [theme.fn.smallerThan('sm')]: {
      width: `100%`,
      marginLeft: `0`,
    },
  }
}));
function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<"dark" | "light">({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
  });
  const [mode, toggleMode] = useToggle<"dark" | "light">(colorScheme, ["dark", "light"]);
  const toggleNav = () => {
    toggleMode();
    setColorScheme(mode);
  };
  useHotkeys([['c', () => {
    toggleNav()
  }]]);
  const { classes } = useStyles();
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleMode}>
      <MantineProvider theme={{ colorScheme }}>
        <Nav mode={colorScheme} toggleNav={toggleNav} />
        <div className={classes.responsive} style={{ backgroundColor: colorScheme === 'dark' ? "#25262b" : "#f8f9fa" }} >
          <Element name="background" key={'title'} >
            {<Title theme={colorScheme} />}
          </Element>
          <Element name="education" key={'education'}>
            {<Education />}
          </Element>
          <Element name="skills" key={'skills'}>
            {<Skills />}
          </Element>
          <Element name="projects" key={'project'} >
            {<Project />} 
          </Element>
          <Element name="achievements" key={'achievements'} >
            {<Achievement />}
          </Element>
          <Element name="hobby" key={'hobby'} >
            {<Hobby />}
          </Element>
          {<Footer theme={colorScheme} />}

        </div>
      </MantineProvider>
    </ColorSchemeProvider >
  )
}
export default App;
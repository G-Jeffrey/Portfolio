import React, { useState, useEffect } from 'react';
import { Select, createStyles, Navbar, useMantineTheme, Box, SegmentedControl, Center, Group } from '@mantine/core';
import { useMove } from '@mantine/hooks';
import {
  School,
  Code,
  Tie,
  Keyboard,
  BrandTabler,
  Award,
  User,
  Sun,
  Moon,
  Volume
} from 'tabler-icons-react';

import { Link } from 'react-scroll'
// Eager loading not needed, files are local and small enough
// const Alpaca = new Audio("http://localhost:3000/Portfolio/audio/alpacas.m4a");
// const Creampaca = new Audio("http://localhost:3000/Portfolio/audio/creampaca.mp3");
// const Creamsicle = new Audio("http://localhost:3000/Portfolio/audio/creamsicles.m4a");
// const HP = new Audio("http://localhost:3000/Portfolio/audio/hp.mp3");
// const Ink = new Audio("http://localhost:3000/Portfolio/audio/inks.m4a");
// const Jade = new Audio("http://localhost:3000/Portfolio/audio/jade.m4a");
const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    parent: {
      zIndex: 1,
      opacity: 0.9,
      [theme.fn.smallerThan('sm')]: {
        zIndex: -1,
        opacity: 0,
        width: 0,
      },
    },
    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      [theme.fn.largerThan('lg')]: {
        fontSize: theme.fontSizes.lg
      },
      '&:hover': {

        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0], color: theme.colorScheme === 'dark' ? theme.white : theme.black,


        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
            : theme.colors[theme.primaryColor][0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 7],
        },
      },
    },
    removeMargin: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
    },
    thumb: {
      border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[3]
        }`,
      width: 28,
      height: 22,
      color: theme.colors.gray[5],
      backgroundColor: theme.white,
      borderRadius: theme.radius.sm,
    },
    volumeBar: {
      width: `200px`,
      height: 15,
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      position: 'relative',
      borderRadius: 100,
      [theme.fn.smallerThan('lg')]: {
        width: `115px`,
      }
    }
  };
});

const data = [
  { link: 'background', label: 'Background', icon: User, icon2: null },
  { link: 'education', label: `Edu & Exp`, icon: School, icon_2: Tie },
  { link: 'skills', label: 'Skills', icon: Code, icon2: null },
  { link: 'projects', label: 'Projects', icon: BrandTabler, icon2: null },
  { link: 'achievements', label: 'Achievements', icon: Award, icon2: null },
  { link: 'hobby', label: 'Hobbies', icon: Keyboard, icon2: null },

];
const useAudio = (url: string) => {
  const [audio, setAudio] = useState(new Audio(url));
  audio.preload = "auto";
  const [playing, togglePlay] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [source, setSource] = useState(url);
  const toggle = () => togglePlay(!playing);
  const adjustVolume = (new_vol: number) => {
    setVolume(new_vol)
    audio.volume = new_vol;
    return;
  }
  useEffect(() => {
    audio.src = source;
    audio.play();
    return;
  },
    [source]
  );
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  );
  useEffect(() => {
    audio.addEventListener('ended', () => togglePlay(false));
    return () => {
      audio.removeEventListener('ended', () => togglePlay(false));
    };
  }, []);

  return [playing, toggle, volume, adjustVolume, source, setSource];
};
export const Nav = (props: any) => {
  const { classes, cx } = useStyles();
  const [play, toggle, volume, adjustVolume, source, setSource] = useAudio('');
  // toggleAudio;
  const theme = useMantineTheme();
  const { ref } = useMove(({ x }) => {
    //@ts-ignore
    adjustVolume(x)
  });
  const [active, setActive] = useState('Background');
  const links = data.map((item) => (
    <div style={{ marginBottom: '5px' }} key={item.link}>
      <Link activeClass="active" to={item.link} smooth={true} spy={true} duration={400} href={item.link}
        onSetActive={() => setActive(item.label)} isDynamic={true} hashSpy={true}
        className={cx(classes.link, { [classes.linkActive]: item.label === active })}>
        <span className={cx(classes.removeMargin)}>
          <item.icon className={classes.linkIcon}></item.icon>
          <span>{item.label}</span>
        </span>
      </Link >
    </div>
  ));
  return (
    <Navbar className={classes.parent} height={'100vh'} width={{ sm: '200px', lg: '300px' }} p="md" key={props.mode} fixed>

      <Navbar.Section grow>
        {links}
      </Navbar.Section>
      <Navbar.Section>
        <Select
          label="Song"
          placeholder="Pick one"
          searchable
          size='xs'
          nothingFound="No options"
          data={[
            { value: './audio/alpacas.m4a', label: 'Alpaca', group: 'Typing Test' },
            { value: './audio/creampaca.mp3', label: 'Creampaca', group: 'Typing Test' },
            { value: './audio/creamsicles.m4a', label: 'Creamsicle', group: 'Typing Test' },
            { value: './audio/hp.mp3', label: 'Holy Panda', group: 'Typing Test' },
            { value: './audio/inks.mp3', label: 'Gateron Ink', group: 'Typing Test' },
            { value: './audio/jade.m4a', label: 'Box Navy', group: 'Typing Test' },
          ]}
          onChange={(e) => {
            // @ts-ignore
            setSource(e)
          }}
        />
        <Group position="center" style={{ marginTop: '20px', marginBottom: '10px' }}>
          <Volume className={classes.linkIcon} />
          <span
            ref={ref}
            className={classes.volumeBar}
          >
            <div
              style={{
                // @ts-ignore
                width: `${volume * 100}%`,
                height: 15,
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[5] : theme.colors.blue[2],
                borderTopLeftRadius: 100,
                borderBottomLeftRadius: 100
              }}
            />
            <div
              style={{
                position: 'absolute',
                // @ts-ignore
                left: `calc(${volume * 100}% - 8px)`,
                top: 0,
                width: 15,
                height: 15,
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[1],
                borderRadius: 100
              }}
            />
          </span>
        </Group>
      </Navbar.Section>
      <Navbar.Section className={classes.footer}>

        <SegmentedControl
          fullWidth={true}
          value={props.mode}
          onChange={props.toggleNav}
          data={[
            {
              value: 'light',
              label: (
                <Center>
                  <Sun size={16} />
                  <Box ml={10}>Light</Box>
                </Center>
              ),
            },
            {
              value: 'dark',
              label: (
                <Center>
                  <Moon size={16} />
                  <Box ml={10}>Dark</Box>
                </Center>
              ),
            },
          ]}
        />
        <a className={classes.link} onClick={(event) => event.preventDefault()}  >
        </a>
      </Navbar.Section>
    </Navbar >
  );
}
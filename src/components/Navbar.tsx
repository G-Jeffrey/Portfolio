import React, { useState } from 'react';
import { SimpleGrid, Group, createStyles, Navbar, useMantineColorScheme, Box, SegmentedControl, Center } from '@mantine/core';
import {
  School,
  Code,
  Tie,
  Keyboard,
  BrandTabler,
  Award,
  User,
  Sun,
  Moon
} from 'tabler-icons-react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
    removeMargin:{
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
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

export const Nav = (props: any) => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Background');
  const links = data.map((item) => (
    <div style={{marginBottom: '5px'}}>
    <Link activeClass="active" to={item.link} smooth={true} spy={true} duration={400} href={item.link}
      onSetActive={()=>setActive(item.label)} isDynamic={true} hashSpy={true} key={item.link}
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}>
      <span className={cx( classes.removeMargin)}>
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
    </Navbar>
  );
}
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
import { useToggle, useLocalStorage, useHotkeys } from '@mantine/hooks';

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
  };
});

const data = [
  { link: '', label: 'Background', icon: User, icon2: null },
  { link: '', label: `Edu & Exp`, icon: School, icon_2: Tie },
  { link: '', label: 'Skills', icon: Code, icon2: null },
  { link: '', label: 'Projects', icon: BrandTabler, icon2: null },
  { link: '', label: 'Achievements', icon: Award, icon2: null },
  { link: '', label: 'Hobbies', icon: Keyboard, icon2: null },
];

export const Nav = (props: any) => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Background');
  const links = data.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      {/* <Group direction='column'>
        <Group direction="row"> */}
      {<>
        <item.icon className={classes.linkIcon}></item.icon>
        <span>{item.label}</span>
      </>}
      {/* </Group>
        <Group direction="row">
          {(typeof item.icon_2 === 'function') ?
        <>
          <item.icon_2 className={classes.linkIcon} />{`\n`}
          <span>{item.label.split(" ")[1]}</span>
        </>
        : ''}
        </Group>
      </Group> */}



    </a>
  ));
  return (
    <Navbar className={classes.parent} height={'100vh'} width={{ sm: '200px', lg: '300px' }} p="md" fixed>
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
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}  >
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
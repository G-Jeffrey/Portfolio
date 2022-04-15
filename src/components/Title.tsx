import React from 'react';
import { createStyles, Container, Text, Button, Group, useMantineTheme } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    [theme.fn.smallerThan('sm')]: {
        padding: "5vw"
    },
    padding: '1vw'
  },

  inner: {
    position: 'relative',
    paddingTop: 100,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 20,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },

  githubControl: {
    borderWidth: 2,
    borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.dark[9],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'transparent',

    '&:hover': {
      backgroundColor: `${
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
      } !important`,
    },
  },
}));

export function Title() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          {' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            Jeffrey Guan
          </Text>{' '}
        </h1>

        <Text className={classes.description} color="dimmed">
          Hello my name is Jeffrey, I am software engineer with both experience from a
          {' '}<Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
              Fullstack Web Development Bootcamp
          </Text>{' '}and{' '}<Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
              Computer Science
          </Text>. I first got into software engineering by joining my high school's "Software Engineering Program", a 4-year high school program
          {' '}designed expose students to computer science with creative freedom and competitiveness. I found a passion the 
          "<Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} weight={'bolder'} inherit>ah-ha</Text>"
          moments and the competeivness nature of the projects drove me to spend a lot of time independent studying.
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Download PDF Resume
          </Button>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'orange', to: 'yellow' }}
            component="a"
            target="_blank"
            href={"https://sites.google.com/hstat.org/jeffreyg2240-hs-practice/"}
          >
            High school projects
          </Button>
        </Group>
      </Container>
    </div>
  );
}
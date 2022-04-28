import React, { useState } from 'react';
import { Avatar, createStyles, Container, Text, Button, Group, useMantineTheme } from '@mantine/core';
import { At, DeviceMobileRotated } from 'tabler-icons-react';
import { Element } from 'react-scroll';
import Typewriter, { TypewriterState } from 'typewriter-effect';
const BREAKPOINT = '@media (max-width: 755px)';
// type Theme = {
//   theme: "black" | "white";
// }
const useStyles = createStyles((theme) => (
  {
    wrapper: {
      position: 'relative',
      boxSizing: 'border-box',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,

    },
    padding_wrapper:{
      [theme.fn.smallerThan('sm')]: {
        padding: "5vw"
      },
      padding: '1vw',
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
      fontSize: 40,
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
        backgroundColor: `${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
          } !important`,
      },
    },
    icon: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
    name: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
    backgroundImg:{
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
      backgroundImage: `url("http://localhost:3000/Portfolio/background/title.svg")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100vw',
      backgroundAttachment: 'fixed',
    },
  }));

export function Title(props: any) {
  const { classes, cx } = useStyles();
  const strings = ['Software Engineer', 'Web Developer', 'Fullstack Engineer', 'Custom Mechanical Keyboard Enthusiast'];
  return (
    // ./background/title.svg'
    <Element name="background" key={'title'} >
    <div className={classes.wrapper}>

    <div className={classes.backgroundImg}>
    <div className={classes.padding_wrapper}>
      {/* <Element> */}

          <Container size={700} className={classes.inner}>

            <div>
              <Group noWrap>
                <Avatar size={120} radius="md" />
                <div>

                  <Text sx={{ textTransform: 'uppercase' }} weight={700} size={'md'} color="dimmed">
                    <Typewriter
                      onInit={async (typewriter) => {
                        await typewriter.typeString('I am a ').changeDeleteSpeed(10)
                          .pauseFor(800)
                          .typeString(`<span style="color: #759EFF;">${strings[0]}</span>`)
                          .pauseFor(500)
                          .deleteChars(strings[0].length)
                          .pauseFor(300)
                          .typeString(`<span style="color: #D254FF;">${strings[1]}</span>`)
                          .pauseFor(500)
                          .deleteChars(strings[1].length)
                          .pauseFor(300)
                          .typeString(`<span style="color: #FFC932;">${strings[2]}</span>`)
                          .pauseFor(500)
                          .deleteChars(strings[2].length)
                          .pauseFor(300)
                          .typeString(`<span style="color: #FF871E;">${strings[3]}</span>`)
                          .pauseFor(500)

                          .start();
                      }} />
                  </Text>
                  <h1 className={classes.title}>
                    Jeffrey Guan

                  </h1>
                  <Group noWrap spacing={10} mt={3}>
                    <At size={16} className={classes.icon} />
                    <Text size="xs" color="dimmed">
                      {`Jeffreyg2240@gmail.com`}
                    </Text>
                  </Group>
                </div>
              </Group>
            </div>


            <Text className={classes.description} color="dimmed">
              Hello my name is Jeffrey, I am software engineer with both experience from a
              {' '}<Text component="span" variant="gradient" gradient={props.theme === 'dark' ? { from: 'blue', to: 'cyan' } : { from: 'orange', to: 'yellow' }} inherit>
                Fullstack Web Development Bootcamp
              </Text>{' '}and{' '}<Text component="span" variant="gradient" gradient={props.theme === 'dark' ? { from: 'blue', to: 'cyan' } : { from: 'orange', to: 'yellow' }} inherit>
                Computer Science
              </Text>. I first got into software engineering by joining my high school's "Software Engineering Program", a 4-year high school program
              {' '}designed expose students to computer science with creative freedom and competitiveness. I found a passion the
              "<Text component="a" href={'https://en.wikipedia.org/wiki/Eureka_effect'} target='_blank' variant="gradient" gradient={props.theme === 'dark' ? { from: 'blue', to: 'cyan' } : { from: 'orange', to: 'yellow' }} weight={'bolder'} inherit>ah-ha</Text>"
              moments and the competeivness nature of the projects drove me to spend a lot of time independent studying.
            </Text>

            <Group className={classes.controls}>
              <Button
                size="xl"
                component="a"
                target="_blank"
                href='./Jeffrey Guan - Resume.pdf'
                className={classes.control}
                variant="gradient"
                gradient={props.theme === 'dark' ? { from: 'blue', to: 'cyan' } : { from: 'orange', to: 'yellow' }}
              >
                View PDF Resume
              </Button>
              <Button
                size="xl"
                className={classes.control}
                variant="gradient"
                gradient={props.theme === 'dark' ? { from: 'orange', to: 'yellow' } : { from: 'blue', to: 'cyan' }}
                component="a"
                target="_blank"
                href={"https://sites.google.com/hstat.org/jeffreyg2240-hs-practice/"}
              >
                High school projects
              </Button>
            </Group>
          </Container>
          </div>
        </div>
        </div>
      </Element>
  );
}
import React, { useState } from 'react';
import { Accordion, SimpleGrid, Group, createStyles, Navbar, useMantineColorScheme, ThemeIcon } from '@mantine/core';
import { Palette } from 'tabler-icons-react';
const BREAKPOINT = '@media (max-width: 755px)';
const useStyles = createStyles((theme) => ({
    centerize: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    icon: {
        width: 300,
        height: 230,
        marginTop: 30,
        marginBottom: 30,
        [BREAKPOINT]: {
            width: 200,
            height: 200,
        },
    }
}));
export const Skills = () => {
    const { classes } = useStyles();
    return (
        <Accordion disableIconRotation>
            <Accordion.Item
                label="Programming Langauges"
                icon={
                    <ThemeIcon color="violet" variant="light">
                        <Palette size={14} />
                    </ThemeIcon>
                }
            >
                <div className={classes.centerize}>
                    <img src='./languages/cpp.svg' className={classes.icon} />
                    <img src='./languages/java.svg' className={classes.icon} />
                    <img src='./languages/js.svg' className={classes.icon} />
                    <img src='./languages/ts.svg' className={classes.icon} />
                    <img src='./languages/python.svg' className={classes.icon} />
                    <img src='./languages/ruby.svg' className={classes.icon} />
                </div>
            </Accordion.Item>
            <Accordion.Item
                label="Frameworks"
                icon={
                    <ThemeIcon color="violet" variant="light">
                        <Palette size={14} />
                    </ThemeIcon>
                }
            >
                <div className={classes.centerize}>
                    <img src='./languages/django.svg' className={classes.icon} alt='django(py)' />
                    <img src='./languages/flask.svg' className={classes.icon} alt='flask(py)' />
                    <img src='./languages/next.svg' className={classes.icon} alt='next.js(react)' />

                    <img src='./languages/nodejs.svg' className={classes.icon} alt='node.js(js)' />
                    <img src='./languages/react.svg' className={classes.icon} alt='react(node)' />
                    <img src='./languages/sinatra.svg' className={classes.icon} alt='Sinatra(Ruby)' />
                </div>
            </Accordion.Item>
            <Accordion.Item
                label="Web Development"
                icon={
                    <ThemeIcon color="violet" variant="light">
                        <Palette size={14} />
                    </ThemeIcon>
                }
            >
                <div className={classes.centerize}>
                    <img src='./languages/bootstrap.svg' className={classes.icon} alt='bootstrap' />
                    <img src='./languages/css3.svg' className={classes.icon} alt='css3' />
                    <img src='./languages/express.svg' className={classes.icon} alt='express' />
                    <img src='./languages/heroku.svg' className={classes.icon} alt='heroku' />
                    <img src='./languages/html5.svg' className={classes.icon} alt='html5' />
                    <img src='./languages/jest.svg' className={classes.icon} alt='jest' />
                    <img src='./languages/mocha.svg' className={classes.icon} alt='mocha' />
                    <img src='./languages/npm.svg' className={classes.icon} alt='npm' />
                    <img src='./languages/redux.svg' className={classes.icon} alt='redux' />
                    <img src='./languages/webpack.svg' className={classes.icon} alt='webpack' />
                </div>
            </Accordion.Item>
            <Accordion.Item
                label="Databases"
                icon={
                    <ThemeIcon color="violet" variant="light">
                        <Palette size={14} />
                    </ThemeIcon>
                }
            >
                <div className={classes.centerize}>
                    <img src='./languages/posgtres.svg' className={classes.icon} alt='postgresql' />
                    <img src='./languages/mysql.svg' className={classes.icon} alt='mysql' />


                </div>
            </Accordion.Item>
            <Accordion.Item
                label="Others Techincal Skills"
                icon={
                    <ThemeIcon color="violet" variant="light">
                        <Palette size={14} />
                    </ThemeIcon>
                }
            >
                <div className={classes.centerize}>
                    <img src='./languages/aws.svg' className={classes.icon} alt='aws' />
                    <img src='./languages/azure.svg' className={classes.icon} alt='azure' />
                    <img src='./languages/docker.svg' className={classes.icon} alt='docker' />
                    <img src='./languages/git.svg' className={classes.icon} alt='git' />
                    <img src='./languages/github.svg' className={classes.icon} alt='github' />
                    <img src='./languages/intellij.svg' className={classes.icon} alt='intellij' />
                    <img src='./languages/slack.svg' className={classes.icon} alt='slack' />
                    <img src='./languages/vscode.svg' className={classes.icon} alt='vs_code' />

                </div>
            </Accordion.Item>
            <Accordion.Item
                label="Soft Skills"
                icon={
                    <ThemeIcon color="violet" variant="light">
                        <Palette size={14} />
                    </ThemeIcon>
                }
            >
                <div className={classes.centerize}>
                    <img src='./languages/ai.svg' className={classes.icon} alt='ai' />
                    <img src='./languages/arduino.svg' className={classes.icon} alt='arduino' />
                    <img src='./languages/photoshop.svg' className={classes.icon} alt='photoshop' />
                </div>
            </Accordion.Item>
        </Accordion>
    )
}
import React, { useState } from 'react';
import { Accordion, Text, createStyles, ThemeIcon, Container, Grid } from '@mantine/core';
const BREAKPOINT = '@media (max-width: 755px)';
const useStyles = createStyles((theme, _params, getRef) => {
    const control = getRef('control');
    return {
        centerize: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            
        },
        icon: {
            width: 180,
            height: 130,
            marginTop: 20,
            marginBottom: 20,
            [BREAKPOINT]: {
                width: 140,
                height: 110,
            },
        },

        control: {
            ref: control,
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        item: {
            borderRadius: theme.radius.md,
        },
    }
});
export const Skills = (props: any) => {
    const { classes, cx } = useStyles();
    return (
        <Container style={{paddingTop:'20px',position:'relative',zIndex:5}}>
            <Text style={{
                textAlign: 'center', padding: '20px', fontSize: 40,
                fontWeight: 900,
                lineHeight: 1.1
            }} weight={'bolder'} size={'xl'} variant='gradient' gradient={{ from: '#0900FF', to: '#A3E5F9' }}> Techincal Skills </Text>
            <Accordion classNames={{
                item: classes.item,
                control: classes.control,
            }} iconSize={30}>
                <Accordion.Item
                    label="Programming Langauges"
                    icon={
                        <ThemeIcon variant="gradient" gradient={props.theme==='dark' ? { from: 'indigo', to: 'cyan' }: { from: 'orange', to: 'yellow' }}>
                            <img src='https://g-jeffrey.github.io/Portfolio/languages/language.svg' />
                        </ThemeIcon>
                    }
                >
                    <div className={classes.centerize}>
                        <img src='https://g-jeffrey.github.io/Portfolio/languages/cpp.svg' className={classes.icon} />
                        <img src='https://g-jeffrey.github.io/Portfolio/languages/java.svg' className={classes.icon} />
                        <img src='https://g-jeffrey.github.io/Portfolio/languages/js.svg' className={classes.icon} />
                        <img src='https://g-jeffrey.github.io/Portfolio/languages/ts.svg' className={classes.icon} />
                        <img src='https://g-jeffrey.github.io/Portfolio/languages/python.svg' className={classes.icon} />
                        <img src='https://g-jeffrey.github.io/Portfolio/languages/ruby.svg' className={classes.icon} />
                    </div>                  
                </Accordion.Item>
                <Accordion.Item
                    label="Frameworks"
                    icon={
                        <ThemeIcon variant="gradient" gradient={props.theme==='dark' ? { from: 'indigo', to: 'cyan' }: { from: 'orange', to: 'yellow' }}>
                            <img src='https://g-jeffrey.github.io/Portfolio/languages/framework.svg' />
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
                        <ThemeIcon variant="gradient" gradient={props.theme==='dark' ? { from: 'indigo', to: 'cyan' }: { from: 'orange', to: 'yellow' }}>
                            <img src='https://g-jeffrey.github.io/Portfolio/languages/web_dev.svg' />
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
                        <ThemeIcon variant="gradient" gradient={props.theme==='dark' ? { from: 'indigo', to: 'cyan' }: { from: 'orange', to: 'yellow' }}>
                            <img src='https://g-jeffrey.github.io/Portfolio/languages/database.svg' />
                        </ThemeIcon>
                    }
                >
                    <div className={classes.centerize}>
                        <img src='./languages/mysql.svg' className={classes.icon} alt='mysql' />
                        <img src='./languages/postgres.svg' className={classes.icon} alt='postgresql' />
                        <img src='./languages/sqlite.svg' className={classes.icon} alt='sqllite' />
                        <img src='./languages/firebase.svg' className={classes.icon} alt='firebase' />
                    </div>
                </Accordion.Item>
                <Accordion.Item
                    label="Others Techincal Skills"
                    icon={
                        
                        <ThemeIcon variant="gradient" gradient={props.theme==='dark' ? { from: 'indigo', to: 'cyan' }: { from: 'orange', to: 'yellow' }}>
                            <img src='https://g-jeffrey.github.io/Portfolio/languages/other.svg' />
                        </ThemeIcon>
                    }
                >
                    <div className={classes.centerize}>
                        <img src='./languages/aws.svg' className={classes.icon} alt='aws' />
                        <img src='./languages/azure.svg' className={classes.icon} alt='azure' />
                        <img src='./languages/kafka.svg' className={classes.icon} alt='kafka' />
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
                        <ThemeIcon variant="gradient" gradient={props.theme==='dark' ? { from: 'indigo', to: 'cyan' }: { from: 'orange', to: 'yellow' }}>
                            <img src='https://g-jeffrey.github.io/Portfolio/languages/skills.svg' />
                        </ThemeIcon>
                    }
                >
                    <div className={classes.centerize}>
                        <img src='./languages/ai.svg' className={classes.icon} alt='ai' />
                        <img src='./languages/arduino.svg' className={classes.icon} alt='arduino' />
                        <img src='./languages/excel.svg' className={classes.icon} alt='excel' />
                        <img src='./languages/google_sheets.svg' className={classes.icon} alt='google_sheets' />
                        <img src='./languages/google_suite.svg' className={classes.icon} alt='google_suite' />
                        <img src='./languages/microsoft_suite.svg' className={classes.icon} alt='microsoft_suite' />
                        <img src='./languages/photoshop.svg' className={classes.icon} alt='photoshop' />
                    </div>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}
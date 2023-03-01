import React from 'react';
import { createStyles, SimpleGrid, Container, Text } from "@mantine/core";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { School, Tie } from 'tabler-icons-react';
const BREAKPOINT = '@media (min-width: 1175px)';
let colorScheme: string;
let colors: { [key: string]: string[] };

const useStyles = createStyles((theme, _params, getRef) => {
    colorScheme = theme.colorScheme;
    colors = theme.colors;
    return {
        link: {
            textDecoration: 'none',
            color: "#fff"
        },
        background: {
            zIndex:4,
            position: 'relative',
            // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
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



export const Education = () => {
    const { classes, cx } = useStyles();
    return (
        <Container className={classes.background}>
            <Text className={classes.header} color="dimmed">
                <Text component='span' variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
                    Education</Text>{' '}and{' '}
                <Text component='span' variant="gradient" gradient={{ from: 'orange', to: 'yellow' }} inherit>
                    Experiences</Text>

            </Text>
            <VerticalTimeline animate={true} lineColor={colorScheme === 'dark' ? colors.dark[1] : colors.gray[4]}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: colorScheme === 'dark' ? "#ffc078" : "#fd7e14", color: '#fff', boxShadow: 'none', borderRadius: '10px' }}
                    contentArrowStyle={{ borderRight: `7px solid ${colors.gray[4]}` }}
                    date="Sept 2022 - Sept 2022"
                    dateClassName={classes.date_text}
                    iconStyle={{ background: colorScheme === 'dark' ? "#f76707" : "#d9480f", color: '#fff' }}
                    icon={<Tie />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer II (L3)</h3>
                    <h4 className="vertical-timeline-element-subtitle"><a className={classes.link} href="https://cunytechprep.nyc/"
                    >Google : YouTube</a></h4>
                    <p style={{fontSize:12}}>
                        The interview started in February and matched in July with YouTube. The offer was rescinded in September during Google's hiring freeze due to a loss in headcount. 
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: colorScheme === 'dark' ? "#74c0fc" : "#1c7ed6", color: '#fff', boxShadow: 'none', borderRadius: '10px' }}
                    contentArrowStyle={{ borderRight: `7px solid ${colors.gray[4]}` }}
                    date="Sept 2021 - May 2022"
                    dateClassName={classes.date_text}
                    iconStyle={{ background: colorScheme === 'dark' ? "#339af0" : "#1971c2", color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">Bootcamp Certification</h3>
                    <h4 className="vertical-timeline-element-subtitle"><a className={classes.link} href="https://cunytechprep.nyc/"
                    >City Unversity of New York Tech Prep</a></h4>
                    <p>
                        Fullstack Web Development and Software Engineering Bootcamp
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: colorScheme === 'dark' ? "#ffc078" : "#fd7e14", color: '#fff', boxShadow: 'none', borderRadius: '10px' }}
                    contentArrowStyle={{ borderRight: `7px solid ${colors.gray[4]}` }}
                    date="June 2021 - October 2021"
                    dateClassName={classes.date_text}
                    iconStyle={{ background: colorScheme === 'dark' ? "#f76707" : "#d9480f", color: '#fff' }}
                    icon={<Tie />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineering Assosiate</h3>
                    <h4 className="vertical-timeline-element-subtitle"><a className={classes.link} href="https://freshair.org/">The Fresh Air Funds</a></h4>
                    <p> Research and Development
                    </p>
                </VerticalTimelineElement>
                <div></div>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: colorScheme === 'dark' ? "#ffc078" : "#fd7e14", color: '#fff', boxShadow: 'none', borderRadius: '10px' }}
                    contentArrowStyle={{ borderRight: `7px solid ${colors.gray[4]}` }}
                    date="Dec 2020 - Feb 2021"
                    dateClassName={classes.date_text}
                    iconStyle={{ background: colorScheme === 'dark' ? "#f76707" : "#d9480f", color: '#fff' }}
                    icon={<Tie />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineering Fellow</h3>
                    <h4 className="vertical-timeline-element-subtitle"><a className={classes.link} href="https://www.cuny.edu/jobs-ceo-council/">
                        EverUp </a></h4>
                    <p>
                        Micro-Credentials, Web Development, Software Lifecycle
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: colorScheme === 'dark' ? "#74c0fc" : "#1c7ed6", color: '#fff', boxShadow: 'none', borderRadius: '10px' }}
                    contentArrowStyle={{ borderRight: `7px solid ${colors.gray[4]}` }}
                    date="Sept 2019 - May 2022"
                    dateClassName={classes.date_text}
                    iconStyle={{ background: colorScheme === 'dark' ? "#339af0" : "#1971c2", color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">Undergraduate Degree</h3>
                    <h4 className="vertical-timeline-element-subtitle"><a className={classes.link} href="https://www.qc.cuny.edu/Pages/home.aspx">
                        City Unversity of New York, Queens College</a></h4>
                    <p>
                        B.A. in Computer Science
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: colorScheme === 'dark' ? "#ffc078" : "#fd7e14", color: '#fff', boxShadow: 'none', borderRadius: '10px' }}
                    contentArrowStyle={{ borderRight: `7px solid ${colors.gray[4]}` }}
                    date="June 2016 - May 2019"
                    dateClassName={classes.date_text}
                    iconStyle={{ background: colorScheme === 'dark' ? "#f76707" : "#d9480f", color: '#fff' }}
                    icon={<Tie />}
                >
                    <h3 className="vertical-timeline-element-title">Data Entry Clerk</h3>
                    <h4 className="vertical-timeline-element-subtitle">BookUSD</h4>
                    <p> Data Analysis, E-commerce management
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: colorScheme === 'dark' ? "#74c0fc" : "#1c7ed6", color: '#fff', boxShadow: 'none', borderRadius: '10px' }}
                    contentArrowStyle={{ borderRight: `7px solid ${colors.gray[4]}` }}
                    date="Sept 2015 - May 2019"
                    dateClassName={classes.date_text}
                    iconStyle={{ background: colorScheme === 'dark' ? "#339af0" : "#1971c2", color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineering Program</h3>
                    <h6 className="vertical-timeline-element-subtitle">
                        <a className={classes.link} href="https://hstatsep.github.io/">High School of Telecommunications Arts and Technology</a>
                    </h6>
                    <p>
                        High School, 4-year Software Engineering Class
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Container>
    )
}

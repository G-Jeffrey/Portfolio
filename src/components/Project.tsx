import React from 'react';
import { createStyles, Text, Container, SimpleGrid } from "@mantine/core";
import { ProjectCard } from './ProjectCard';

const useStyles = createStyles((theme, _params, getRef) => ({

}));

export const Project = (props: any) => {
    const {classes} = useStyles();
    return (
        <div style={{ margin: 40, marginTop: 0,  position: 'relative', zIndex: 5 }}>
            <Text style={{
                textAlign: 'center', padding: '20px', fontSize: 40,
                fontWeight: 900,
                lineHeight: 1.1
            }} weight={'bolder'} size={'xl'} variant='gradient' gradient={props.theme==='dark' ? { from: 'blue', to: 'cyan' }: { from: '#ff9900', to: 'yellow' }}> Projects </Text>
            <Container>
                <SimpleGrid cols={1}>

                    <ProjectCard
                        image={[
                            ['https://g-jeffrey.github.io/Portfolio/projects/skilly/landing.png', 'Landing Page'],
                            ['./projects/skilly/features.png', 'Features'],
                            ['./projects/skilly/login.png', 'Login Page'],
                            ['./projects/skilly/profile.png', 'Profile'],
                            ['./projects/skilly/resume_builder.png', 'Resume Builder']
                        ]}
                        key={'Skill.ly'}
                        title={'Skill.ly'}
                        link={'https://devpost.com/software/skill-ly'}
                        description={'Many times when we submit out resumes to an ATS (Applicant Tracking System) parser, it returns inaccurate data. In many occasions many applicants are rejected by the machine because either the parser incorrectly formatted the data or the resume lacks specific keywords. To address this issue, we wanted to create a platform that allows recruiters to get a comprehensive overview of every applicants’ skills, work experience, and achievements.'}
                        reason={'City Unversity Of New York Hackathon 2021'}
                        badges={[{ label: 'First Place', icon: './projects/icon/first.svg' },
                        { label: 'Most Creative', icon: './projects/icon/creative.svg' },
                        { label: 'Best Wild Card', icon: './projects/icon/wildcard.svg' },
                        { label: 'Figma', icon: './projects/icon/figma.svg' }]}
                    />
                    <ProjectCard
                        image={[
                            ['./projects/etit/home.png', 'Home Screen'],
                            ['./projects/etit/search.png', 'Search Screen'],
                            ['./projects/etit/restaurant.png', 'Restaurant Screen'],
                            ['./projects/etit/reviews.png', 'Reviews Screen'],
                            ['./projects/etit/leave-review.png', 'Leave Review Page']
                        ]}
                        key={'Eti.it'}
                        title={'Et.it'}
                        link={'https://devpost.com/software/jhk-pmz63c'}
                        description={'An application that gamifies the process of food ordering, breaks the monopoly on food reviews held by companies like Yelp and UberEats, provides cheap, reliable, and verified reviews to restaurants, and uses a review system based on blockchain, completely independent of our company.'}
                        reason={'Ascend Hackathon : Revive Small Business'}
                        badges={[{ label: 'Second Place', icon: './projects/icon/second.svg' },
                        { label: 'Bubble.io', icon: './projects/icon/bubble.png' },
                        { label: 'SQLite', icon: './languages/sqlite.svg' },
                        { label: 'Mobile', icon: './projects/icon/mobile.svg' },
                        { label: 'Fully Functional', icon: './projects/icon/functional.svg' }]}
                    />
                    <ProjectCard
                        image={[
                            ['./projects/toki/landing.PNG', 'Landing Page'],
                            ['./projects/toki/vendors.PNG', 'Vendors List'],
                            ['./projects/toki/login.PNG', 'Login Page (Picture of Toki from NY MK Discord)'],
                            ['./projects/toki/orders.PNG', 'Order Overview'],
                            ['./projects/toki/filter_order.PNG', 'Filter Orders'],
                            ['./projects/toki/add_order.PNG', 'Create Order'],
                            ['./projects/toki/edit_order.PNG', 'Edit Order'],
                            ['./projects/toki/items.PNG', 'Item Overview'],
                            ['./projects/toki/items_filter.PNG', 'Filter Items'],
                            ['./projects/toki/items.PNG', 'Profile Overview'],
                        ]}
                        key={'Toki'}
                        title={'Toki'}
                        link={'https://toki-tracker.herokuapp.com/'}
                        description={'The purpose of this application is to be able to track user spending on custom keyboard purchases. Over the course of years, we want to track our spending on our hobby as well as our arrival and purchase date. This application allows users of the custom keyboard hobby to track their spending and categorize it by vendor, order name, cost, arrival date, or purchase date. The current userbase is for the people of the NY custom keyboard discord server.'}
                        reason={'Toki : Glorified Spreadsheet'}
                        badges={[{ label: 'Personal Project', icon: './projects/icon/personal.svg' },
                        { label: 'React', icon: './languages/react.svg' },
                        { label: 'Bootstrap', icon: './languages/bootstrap.svg' },
                        { label: 'Heroku', icon: './languages/heroku.svg' },
                        { label: 'PostgreSQL', icon: './languages/postgres.svg' },
                        { label: 'Prisma ORM', icon: './projects/icon/prisma.svg' },
                        { label: 'Express', icon: './projects/icon/express.png' },
                        { label: 'Node.js', icon: './languages/nodejs.svg' },
                        { label: 'Imgur', icon: './projects/icon/imgur.png' }]}
                    />
                    <ProjectCard
                        image={[
                            ['./projects/drop_by/landing.PNG', 'Landing Page'],
                            ['./projects/drop_by/login.PNG', 'Login Page'],
                            ['./projects/drop_by/events.PNG', 'Events Overview'],
                            ['./projects/drop_by/host_event.PNG', 'Create an Event'],
                            ['./projects/drop_by/map_overview.PNG', 'Maps'],
                            ['./projects/drop_by/map_search.png', 'Maps: Query Location'],
                            ['./projects/drop_by/event_info.PNG', 'Maps: Event Infomation'],
                            ['./projects/drop_by/design_doc.PNG', 'Database Schema Document'],
                        ]}
                        key={'Drop By'}
                        title={'Drop By'}
                        link={'https://github.com/drop-by/Drop_by'}
                        description={'For meeting users who have similar hobbies and plan events with large groups. Sometimes it is difficult to find different activities to do outside with friends. People with friends/ family, people who love to socialize or who don’t know what to do when hanging out. Business owners would also use the app to advertise their own events to the public.'}
                        reason={'CUNY Tech Prep : Fall Semester Project'}
                        badges={[{ label: 'React', icon: './languages/react.svg' },
                        { label: 'Chakra UI', icon: './projects/icon/chakra.png' },
                        { label: 'PostgreSQL', icon: './languages/postgres.svg' },
                        { label: 'Express', icon: './projects/icon/express.png' },
                        { label: 'Sequelize', icon: './projects/icon/sequelize.png' },
                        { label: 'Node.js', icon: './languages/nodejs.svg' },
                        { label: 'Google Maps', icon: './projects/icon/google_maps.png' }]}
                    />

                </SimpleGrid>
            </Container>
        </div>
    );
}
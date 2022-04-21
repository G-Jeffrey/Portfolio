import React from 'react';
import { Container, createStyles, Text } from '@mantine/core';
import { DndList } from './DragnDrop';

const useStyles = createStyles((theme) => ({
  item: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    padding: `${theme.spacing.sm}px ${theme.spacing.xl}px`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    marginBottom: theme.spacing.sm,
  },

  itemDragging: {
    boxShadow: theme.shadows.sm,
  },

  symbol: {
    fontSize: 30,
    fontWeight: 700,
    width: 60,
  },
}));

interface DndListProps {
  data: {
    position: number;
    mass: number;
    symbol: string;
    name: string;
  }[];
}

export const Achievement = () =>{
    return (
        <Container>
            <Text style={{
                textAlign: 'center', padding: '20px', fontSize: 40, paddingBottom: '0px',
                fontWeight: 900,
                lineHeight: 1.1
            }} weight={'bolder'} size={'xl'} variant='gradient' gradient={{ from: '#0900FF', to: '#A3E5F9' }}> Achievements </Text>
            <Text style={{textAlign: 'center', paddingBottom: '20px'}} color="dimmed" size="sm">Click n Drag!</Text>
            <DndList data={[{desc: "Baccalaureate in Computer Science 2 1/2 years, 120+ credits", url: './projects/icon/qc.png', name: 'Undergrad at Queens College' },
                            {desc: `Selective software engineering program, 80 students out of 1000+ applicants.<br/>Learned and deployed in-demand technologies like React, Node.js, Typescript, Express, Sequelize,\
                             PostgreSQL, and other Javascript frameworks. Used industry best practices for design, implementation,\
                              and deployments such as MVC designs, version control with Git/GitHub, agile and SCRUM with Slack and Trello,\
                               encryption methods, testing with Jest/Mocha.js, and CI/CD.`, url: './projects/icon/ctp.png', name: 'CUNY Tech Prep Bootcamp: Fullstack Web Development' },
                            {desc: `4 year engineer program.<br/>Developed light full-stack web apps with Javascript and Ruby/Sinatra.<br/>\
                            Deploying applications on PaaS/IaaS cloud services like Heroku and EC2 AWS`, url: './projects/icon/hstat.png', name: 'High School: Software Engineering Program' },
                            {desc: "", url: './projects/icon/everup.jpg', name: 'EverUp Micro-credentials: Software Engineering' },
                            {link: 'https://devpost.com/software/skill-ly', desc: "Skill.ly: First place, Best Wild Card, Most Creative", url: './projects/icon/first.svg', name: 'CUNY Hackathon 2021' },
                            {link: 'https://devpost.com/software/jhk-pmz63c', desc: "Et.it: Second Place", url: './projects/icon/second.svg', name: 'Ascend Hackathon: Revive Small Businesses' },
                            {link: 'https://www.credly.com/badges/b3dcda62-ccf7-48c3-b680-89e175c6960b/public_url', desc: "October 2021 - October 2024", url: './projects/icon/aws.png', name: 'AWS Cloud Practitioner Certification (CLF-C01)' },
                            {link: 'https://www.credly.com/badges/6474a7cc-9e0b-48c0-bfb4-3b322bb40c52/public_url', desc: "October 2021", url: './projects/icon/azure.png', name: 'Microsoft Azure Fundamentals Certification (AZ-900)' },
                            ]}/>
        </Container>
        
    )
}
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Container, createStyles, SimpleGrid, Text, Card } from '@mantine/core';
import { StatsSegments } from './LeetcodeStat';
import { Keyboards } from './Keyboards';


const useStyles = createStyles((theme) => ({

  backgroundCTA: {
    backgroundColor: theme.colorScheme === 'dark' ? `rgba(26, 27, 30, 0.8)` : `rgba(0, 0, 0, 0.8)`,
  },
  btn_background: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[9]
  },
  backgroundImg: {
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
    backgroundImage: `url("https://g-jeffrey.github.io/Portfolio/background/Hobby.svg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '200vw',
    backgroundPosition: `200px 55vh`,
    backgroundAttachment: 'fixed',
    paddingTop: '4vh',
    paddingBottom: '5vh',
    zIndex: 4,

  },
  background: {
    paddingBottom: '50px'
  },
}));
export const Hobby = (props: any) => {
  const [data, setData] = useState({});
  const { classes } = useStyles();
  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/jeffreyg2240', {
      method: 'GET'
    }).then(res => res.json()).then(res => setData(res));
  }, [])
  const easyP = parseFloat((data.easySolved / data.totalSolved * 100).toFixed(1)), medP = parseFloat((data.mediumSolved / data.totalSolved * 100).toFixed(1)), hardP = parseFloat((data.hardSolved / data.totalSolved * 100).toFixed(1));
  return (<div className={classes.backgroundImg}>
    <Container className={classes.background}>
      <Text style={{
        textAlign: 'center', padding: '20px', fontSize: 40,
        fontWeight: 900,
        lineHeight: 1.1
      }} weight={'bolder'} size={'xl'} variant='gradient' gradient={props.theme==='dark' ? { from: 'blue', to: 'cyan' }: { from: '#ff9900', to: 'yellow' }}> Hobbies </Text>
    </Container>
    {/* <div>
        <Keyboards />
      </div> */}
    <Container className={classes.background}>
      <SimpleGrid cols={2} breakpoints={[
        { maxWidth: 'xl', cols: 2, spacing: 'md' },
        { maxWidth: 'md', cols: 1, spacing: 'sm' },
      ]}>
        <Card className={classes.backgroundCTA}>
          <Card.Section>
            {

              data['status'] === 'success' ?
                <StatsSegments total={String(data.totalQuestions)} diff={23} totalSolved={String(data.totalSolved)}
                  data={[
                    { label: 'Easy', count: String(data.easySolved), part: easyP || 34.4, color: 'Green', total: String(data.totalEasy), totalPercent: parseFloat((data.easySolved / data.totalEasy * 100).toFixed(1)) },
                    { label: 'Medium', count: String(data.mediumSolved), part: medP || 59.3, color: '#FF8A24', total: String(data.totalMedium), totalPercent: parseFloat((data.mediumSolved / data.totalMedium * 100).toFixed(1)) },
                    { label: 'Hard', count: String(data.hardSolved), part: hardP || 6.2, color: 'Red', total: String(data.totalHard), totalPercent: parseFloat((data.hardSolved / data.totalHard * 100).toFixed(1)) }
                  ]} />

                :
                <StatsSegments total={'2247'} diff={23} totalSolved={'466'}
                  data={[{ label: 'Easy', count: '169', part: 34.4, color: 'Green', total: '565', totalPercent: 28.4 },
                  { label: 'Medium', count: '271', part: 59.3, color: '#FF8A24', total: '1197', totalPercent: 22.6 },
                  { label: 'Hard', count: '26', part: 6.2, color: 'Red', total: '485', totalPercent: 5.4 }
                  ]} />
            }
          </Card.Section>
        </Card>
      </SimpleGrid>
    </Container>
  </div>
  )
}
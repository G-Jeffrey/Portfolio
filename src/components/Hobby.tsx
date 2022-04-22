// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Container, createStyles, SimpleGrid, Text, Card, Group } from '@mantine/core';
import { StatsSegments } from './LeetcodeStat';



const useStyles = createStyles((theme) => ({

}));
export const Hobby = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/jeffreyg2240', {
      method: 'GET'
    }).then(res => res.json()).then(res => setData(res));
  }, [])
  console.log(data)
  const easyP = parseFloat((data.easySolved / data.totalSolved * 100).toFixed(1)), medP = parseFloat((data.mediumSolved / data.totalSolved * 100).toFixed(1)), hardP = parseFloat((data.hardSolved / data.totalSolved * 100).toFixed(1));
  console.log(typeof easyP, typeof medP, typeof hardP);
  return (
    <Container style={{ marginTop: '30px', marginBottom: '50px' }}>
      <Text style={{
        textAlign: 'center', padding: '20px', fontSize: 40,
        fontWeight: 900,
        lineHeight: 1.1
      }} weight={'bolder'} size={'xl'} variant='gradient' gradient={{ from: '#0900FF', to: '#A3E5F9' }}> Hobbies </Text>

      <SimpleGrid cols={2}>
        <Card>
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
          <Group>
            Jeffreyg2240
          </Group>

        </Card>
      </SimpleGrid>
    </Container>
  )
}
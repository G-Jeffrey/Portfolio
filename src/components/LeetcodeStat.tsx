import React from 'react';
import { createStyles, RingProgress, Progress, Box, Text, Group, Paper, SimpleGrid, Image, Button } from '@mantine/core';
import { ArrowUpRight, DeviceAnalytics } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  progressLabel: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    fontSize: theme.fontSizes.sm,
  },
  bg:{
    border: theme.colorScheme ==='dark' ? `rgb(16, 17, 19)` : `rgb(52, 58, 64, 0.6)`,
    backgroundColor: theme.colorScheme ==='dark' ? `rgba(16, 17, 19, 0.6)` : `rgba(52, 58, 64, 0.6)`,
  },
  stat: {
    borderBottom: '3px solid',
    paddingBottom: 3,
  },

  statCount: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.3,
  },

  diff: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    display: 'flex',
    alignItems: 'center',
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2],
  },
}));

interface StatsSegmentsProps {
  total: string;
  diff: number;
  totalSolved: string;
  data: {
    label: string;
    count: string;
    part: number;
    color: string;
    total: string;
    totalPercent: number;
  }[];
}

export function StatsSegments({ total, diff, totalSolved, data }: StatsSegmentsProps) {
  const { classes } = useStyles();

  const segments = data.map((segment) => ({
    value: segment.part,
    color: segment.color,
    label: segment.part > 10 ? `${segment.part}%` : null,
  }));

  const descriptions = data.map((stat) => (
    <div key={stat.label} >
      <Box key={stat.label} sx={{ borderBottomColor: stat.color }} className={classes.stat} >
        <Text transform="uppercase" size="xs" color="dimmed" weight={700}>
          {stat.label}
        </Text>

        <Group position="apart" align="flex-end" spacing={0} >
          <Text weight={700}>{stat.count} <Text size='xs' color='dimmed' component='span'> / {totalSolved}</Text></Text>
          <Text color={stat.color} weight={700} size="sm" className={classes.statCount}>
            {stat.part}%
          </Text>
        </Group>

      </Box>
      <RingProgress
        sections={[{ value: stat.totalPercent, color: stat.color }]}
        label={
          <Text color={stat.color} weight={700} align="center" size="xl">
            {stat.totalPercent}%
          </Text>
        } />
      <Text color={stat.color} weight={500} align="center" size="lg">
        {stat.count}
        <Text weight={300} color='dimmed' size='sm' component='span'>
          {' '}/{stat.total}
        </Text>
      </Text>
    </div>
  ));

  return (
    <Paper withBorder p="md" radius="md" className={classes.bg}>
      <Group position="apart">
        <Group align="flex-end" spacing="xs">
          <Text size="xl" weight={700}>
            {totalSolved} <Text size='md' color='dimmed' component='span'>/ {total}</Text>
          </Text>
          <Text color="teal" className={classes.diff} size="sm" weight={700}>
            <span>+{diff}</span>
            <ArrowUpRight size={16} style={{ marginBottom: 4 }} />
          </Text>
        </Group>
        <Image src='./projects/icon/leetcode.png' width={100} />
      </Group>

      <Text color="dimmed" size="sm">
        <b>Daily</b> Questions solved this month
      </Text>

      <Progress
        // @ts-ignore
        sections={segments}
        // roundCaps
        size={40}
        classNames={{ label: classes.progressLabel }}
        mt={10}
      />
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'xs', cols: 1 }]} mt="xl">
        {descriptions}
      </SimpleGrid>
    </Paper>
  );
}

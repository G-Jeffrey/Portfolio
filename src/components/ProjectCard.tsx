import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ExternalLink } from 'tabler-icons-react';
import { createStyles, Card, Text, useMantineTheme, Badge, Image, Group } from "@mantine/core";
const useStyles = createStyles((theme, _params, getRef) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
  borderBottom:{
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`
  }
}));
interface ProjectCardProps {
  image: string[][];
  link: string;
  title: string;
  reason: string;
  description: string;
  badges: {
    icon: string;
    label: string;
  }[];
}
export const ProjectCard = ({ image, title, link, description, reason, badges }: ProjectCardProps) => {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const features = badges.map((badge) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={badge.label}
      rightSection={badge.label}
    >
      <Image src={badge.icon} width={16} />
    </Badge>
  ));
  // console.log(theme.colors);
  return (
    <Card withBorder radius="md" p="md" className={classes.card} key={title}>
      <Card.Section className={classes.borderBottom}>
        <Carousel interval={2000} infiniteLoop={true} swipeable={true} showThumbs={false} emulateTouch={true}>
          {image.map((img,i) =>
            <div key={i} style={{marginLeft:'20px', marginRight: '20px'}}>
              <Image src={img[0]} fit='contain' height={700} key={img[1]}/>
              <p className="legend">{img[1]}</p>
            </div>
          )}


        </Carousel>
      </Card.Section>
      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text style={{ fontSize: '3em' }} weight={'bolder'}>
            {title}{' '}
            <sup><Text mt="sm" component='a' href={link} target='_blank' className={classes.label} color="dimmed">
              <ExternalLink size={20} />
            </Text></sup>
          </Text>
          <Badge size="sm">{reason}</Badge>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      {/* <Group mt="xs">
          <Button radius="md" style={{ flex: 1 }}>
            Show details
          </Button>
          <ActionIcon variant="default" radius="md" size={36}>
            <Heart size={18} className={classes.like} />
          </ActionIcon>
        </Group> */}
    </Card>
  )
}
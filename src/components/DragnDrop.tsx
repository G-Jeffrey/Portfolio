import React from 'react';
import { createStyles, Text, Image } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const useStyles = createStyles((theme) => ({
  item: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
    padding: `${theme.spacing.sm}px ${theme.spacing.xl}px`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    marginBottom: theme.spacing.sm,
  },

  itemDragging: {
    background: 'cyan',
    boxShadow: theme.shadows.sm,
  },
  name: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.dark[4],
  },
  symbol: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[5],
    margin: 5,
    paddingRight: 15
  },
}));

interface DndListProps {
  data: {
    desc: string;
    url: string;
    name: string;
    link?: string;
  }[];
}

export function DndList({ data }: DndListProps) {
  const { classes, cx } = useStyles();
  const [state, handlers] = useListState(data);

  const items = state.map((item, index) => (
    <Draggable key={item.name} index={index} draggableId={item.name}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Image className={classes.symbol} src={item.url} width={60} radius={5}/>
          <div>
            <Text className={classes.name} component={item.link ? "a" : 'span'} href={item.link ? item.link : '#'} target={item.link ? "_blank" : ''}>{item.name}</Text>
            <Text color="dimmed" size="sm">
              {item.desc.split('<br/>').map(text=>
                (
                  <>
                  {text}
                  <br/>
                  </>
                ))}
            </Text>
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) =>
        // @ts-ignore:next-line
        handlers.reorder({ from: source.index, to: destination.index })
      }
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
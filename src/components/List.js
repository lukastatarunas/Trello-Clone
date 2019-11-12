import React from 'react'
import ListCard from './ListCard'
import Button from './Button'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const ListContainer = styled.div`
  background-color: #dfe3e6
  border-radius: 3px
  width: 300px
  height: 100%
  padding: 8px
  margin-right: 8px
`

const List = ({ title, cards, listID, index }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <ListContainer {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Droppable droppableId={String(listID)}>
            {provided => (
              <div {...provided.draggableProps} ref={provided.innerRef}>
                <h4>{title}</h4>
                {cards.map((card, index) => <ListCard key={card.id} id={card.id} text={card.text} index={index} />)}
                {provided.placeholder}
                <Button listID={listID} />
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  )
}

export default List
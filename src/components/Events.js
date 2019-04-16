import React from 'react'
import { Container, Row, CardColumns } from 'reactstrap'
import EventRender from './EventRender'

const Events = (props) => {
  const AddBookmark = () => props.bookmark
  const events = props.events.filter(e => e.name.en)
  return(
    <Container>
      <Row>
        <CardColumns>
          {events.map(e =>
            <EventRender key={e.id} event={e} bookmark={AddBookmark} />
          )}
        </CardColumns>
      </Row>
    </Container>
  )
}


export default Events
import React from 'react'
import { Container, Row, CardColumns } from 'reactstrap'
import EventRender from './EventRender'
import { Loading } from './Loading'

const Events = (props) => {
  const AddBookmark = () => props.bookmark
  if(props.eventsLoading) {
    return(
      <Loading />
    )
  } else if(props.eventsErrMess) {
    return(
      <h4>{props.eventsErrMess}</h4>
    )
  } else
    return(
      <Container>
        <Row>
          <CardColumns>
            {props.events.map(e =>
              <EventRender key={e.id} event={e} bookmark={AddBookmark} />
            )}
          </CardColumns>
        </Row>
      </Container>
    )
}


export default Events
import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle, CardLink, Button } from 'reactstrap'

const EventRender = ({ event, bookmark }) => {
  const handleClick = (eventId) => () => {
    bookmark(eventId)
    console.log(eventId)
  }
  const imgUrl = (e) => {
    if(e.length < 1) {
      return 'https://landerapp.com/blog/wp-content/uploads/2018/05/eventsPinboard.jpg'
    }
    return e.map( e => e.url)[0]
  }
  //const isFree = (e) => e.map(e => e.is_free)[0]
  //const eventName = (e) => e.map(e => e.en ? e.en : e.fi)
  //console.log(isFree(event.offers))
  return(

    <Card>
      <CardLink target='_blank' href={event.info_url.fi} >
        <CardImg src={imgUrl(event.images)} />
      </CardLink>
      <CardBody >
        <CardTitle >{event.name.en ? event.name.en : event.name.fi}</CardTitle>
        <CardSubtitle className='text-success' >Start: {new Intl.DateTimeFormat('en-us', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(event.start_time))}</CardSubtitle>
        <CardSubtitle className='text-danger'>end: {new Intl.DateTimeFormat('en-us', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(event.end_time))}</CardSubtitle>
        <CardText >{event.short_description.en ? event.short_description.en : event.short_description.fi}</CardText>
        {/*{isFree(event.offers) ? <h3><Badge pill color='danger' >FREE</Badge></h3> : ''}*/}
        <Button onClick={handleClick(event.id)} outline ><span className='fa fa-bookmark fa-lg' ></span></Button>
      </CardBody>
    </Card>


  )
}

export default EventRender
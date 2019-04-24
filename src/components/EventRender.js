import React, { useState } from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle,
  CardLink, Button, Modal, ModalBody, ButtonDropdown, DropdownToggle,
  DropdownMenu, DropdownItem, Col } from 'reactstrap'
import { googleCalendarUrl, outlookCalendarUrl, yahooCalendarUrl, ICSCalendarUrl } from '../shared/urls'

const EventRender = ({ event, bookmark }) => {
  const[color, setColor] = useState('')
  const[isOpen, setIsOpen] = useState(false)
  const handleClick = (eventId) => () => {
    //bookmark(eventId)
    //setColor(color ? '' : 'bg-primary text-white')
    setIsOpen(!isOpen)
    console.log(eventId)
  }
  const imgUrl = (e) => {
    if(e.length < 1) {
      return 'https://landerapp.com/blog/wp-content/uploads/2018/05/eventsPinboard.jpg'
    }
    return e.map( e => e.url)[0]
  }
  const eventName = event.name.en ? event.name.en : event.name.fi
  const description = event.short_description.en ? event.short_description.en : event.short_description.fi
  const eventDate = time => new Intl.DateTimeFormat('en-us', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(time))
  console.log(event)
  //const isFree = (e) => e.map(e => e.is_free)[0]
  //const eventName = (e) => e.map(e => e.en ? e.en : e.fi)
  //console.log(isFree(event.offers))
  return(

    <Card>
      <CardLink target='_blank' href={event.info_url.fi} >
        <CardImg src={imgUrl(event.images)} />
      </CardLink>
      <CardBody >
        <CardTitle >{eventName}</CardTitle>
        <CardSubtitle className='text-success' >Start: {eventDate(event.start_time)}</CardSubtitle>
        <CardSubtitle className='text-danger'>end: {eventDate(event.end_time)}</CardSubtitle>
        <CardText >{description}</CardText>
        {/*{isFree(event.offers) ? <h3><Badge pill color='danger' >FREE</Badge></h3> : ''}*/}
        <ButtonDropdown className={color} color='primary' isOpen={isOpen} toggle={handleClick(event.id)} >
          <DropdownToggle caret>
            <span className='fas fa-calendar-plus fa-lg' ></span>
          </DropdownToggle>
          <DropdownMenu style={{ zIndex: 2222 }}>
            <DropdownItem target="_blank" href={googleCalendarUrl(event)} >
            Add to Google
            </DropdownItem>
            <DropdownItem target="_blank"   href={outlookCalendarUrl(event)}>Add to Outlook </DropdownItem>
            <DropdownItem target="_blank" href={yahooCalendarUrl(event)} >Add to Yahoo</DropdownItem>
            <DropdownItem href={ICSCalendarUrl(event)} >Add to iCal</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </CardBody>
    </Card>


  )
}

export default EventRender
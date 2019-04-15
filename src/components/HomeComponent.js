import React from 'react'
import { Container, Row, Col , Card, CardBody, CardHeader, CardImg, Media,
  CardLink, CardSubtitle, CardTitle, CardText } from 'reactstrap'

const Home = (props) => {
  const fiNews = props.finews.filter(n => n.image !== null)
  console.log(fiNews)
  return(
    <Container>
      <Row>
        <Col md={8} >
          {/*{props.news.map(p =>
            <RenderCard key={p.url} news={p} />
          )}*/}
          <div className='bg-light p-2'>
            {fiNews.map(p =>
              <FiNews key={p.name}  news={p} />
            )}
          </div>
        </Col>
        <Col>
          <Weather />

        </Col>
      </Row>
    </Container>
  )
}

const Weather = () => {
  return(
    <Card className='mt-3 ' >
      <CardBody>
        <CardTitle>Helsinki<img alt='icon' src='//cdn.apixu.com/weather/64x64/night/113.png' /> </CardTitle>
        <h3>1&deg;C</h3>
      </CardBody>
    </Card>
  )
}

const FiNews = ({ news }) => {

  return(
    <Media className=' m-3' >
      <Media left middle href={news.url}   >
        <Media className='rounded mr-3' object src={news.image.thumbnail.contentUrl} alt={news.name}  />
      </Media>
      <Media className='mt-0 mb-1' body>
        <Media heading ><a style={{ textDecoration: 'none' }} rel='noopener noreferrer' target='_blank' href={news.url} >{news.name}</a></Media>
        {news.description}
      </Media>
      <hr />
    </Media>
  )
}

const RenderCard = ({ news }) => {
  const sortContent = (content) => {
    return content.split('[')
  }
  const sortDate = (date) => {
    return new Intl.DateTimeFormat('en-us', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(date)))
  }

  return(
    <Card className='border-primary mt-3' >
      <CardHeader className='bg-primary' >{news.title}</CardHeader>
      <CardBody>
        <CardImg src={news.urlToImage} />
        <CardTitle></CardTitle>
        <CardText>{sortContent(news.content)[0]} <CardLink target="_blank" href={news.url} >[{sortContent(news.content)[1]}</CardLink> </CardText>
        <CardSubtitle>Published at {sortDate(news.publishedAt)} by {news.author} <span className='fa fa-bookmark fa-lg primary' ></span></CardSubtitle>
      </CardBody>
    </Card>
  )
}

export default Home

import React from "react";
import {Container, Row, Col , Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

const Home = props => {
  const news = props.news.slice(15, 20);
  console.log(news);
  return (
    <Container className='mt-3'>
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <CardImg width="100%" height='100%' src={news[0].urlToImage} />
            <CardImgOverlay>
              <CardTitle>{news[0].title}</CardTitle>

              <CardText>
                <small>{news[0].author}</small>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Row>
            <Col className="col">
              <Card>
                <CardImg width="100%" height='250px'  src={news[1].urlToImage} />
                <CardImgOverlay>
                  <CardTitle  >{news[1].title}</CardTitle>

                  <CardText>
                    <small>{news[1].author}</small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardImg width="100%" height='250px' src={news[2].urlToImage} />
                <CardImgOverlay>
                  <CardTitle>{news[2].title}</CardTitle>
                  <CardText>
                    <small className='text-muted' >{news[2].author}</small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg width="100%" height='250px' src={news[3].urlToImage} />
                <CardImgOverlay>
                  <CardTitle>{news[3].title}</CardTitle>
                  <CardText>
                    <small className='text-muted' >{news[3].author}</small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>

          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

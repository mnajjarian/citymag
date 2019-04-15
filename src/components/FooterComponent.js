import React from 'react'
import {
  Container, Row, Col, Button,
} from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = props => (
  <div>
    <div className="footer">
      <Container>
        <Row>
          <Col md className="text-center mt-3 mb-3">
            <h5>CITY MAG</h5>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            </p>
            <Button onClick={props.toggleModal} color="danger">
                Subscribe Now
            </Button>
          </Col>
          <Col md className="text-center mt-3 mb-3">
            <h5>About us</h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <p>
                Contact us: <a href="/">contact@citymag.net</a>
            </p>
          </Col>
          <Col md className="text-center mt-3 mb-3">
            <h5>Follow us</h5>
            <ul>
              <a className="btn btn-social-icon btn-facebook" href="/">
                <li className="fa fa-facebook fa-lg" />
              </a>
              <a className="btn btn-social-icon btn-twitter" href="/">
                <li className="fa fa-twitter fa-lg" />
              </a>
              <a className="btn btn-social-icon btn-instagram" href="/">
                <li className="fa fa-instagram fa-lg" />
              </a>
              <a className="btn btn-social-icon btn-pinterest" href="/">
                <li className="fa fa-pinterest fa-lg" />
              </a>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="footer-bottom">
      <ul className="col-12 list-inline mr-auto text-left">
        <li className="list-inline-item">
          <Link to="/"> Home</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/"> Archive</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/"> Category</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/">About </Link>
        </li>
        <li className="list-inline-item">
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer

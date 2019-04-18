import React, { useState } from 'react'
import { Container, Row, Col, Nav,
  NavItem, NavLink, Card, CardHeader, CardImg, CardBody, CardTitle, Form,
  FormGroup, Label, Input, Button, TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames'
import EventRender from './EventRender'

const Profile = (props) => {
  console.log(props.events)
  const[activeTab, setActiveTab] = useState('1')
  const toggleTab = (tab) => activeTab !== tab ? setActiveTab(tab) : null
  return(
    <Container>
      <Row >
        <Col md={4}  >
          <Card >
            <CardHeader >City Mag</CardHeader>
            <CardBody >
              <CardImg className='rounded-circle' src={require('../assets/img/img.jpeg')} />
              <CardTitle className='text-center mt-2' >Mahdi Najjarian</CardTitle>
              <Nav pills vertical  >
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '0' })}
                    onClick={() => toggleTab('0')} >
                    Events
                  </NavLink>
                </NavItem>
                <NavItem  >
                  <NavLink className={classnames({ active: activeTab === '1' })}
                    onClick={() => toggleTab('1')}
                  >
                    User Profile
                  </NavLink>
                </NavItem>
                <NavItem >
                  <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => toggleTab('2')} >
                    Dashboard
                  </NavLink>
                </NavItem>
              </Nav>
            </CardBody>
          </Card>
        </Col>
        <Col md={8} >
          <TabContent activeTab={activeTab} >
            <TabPane tabId='0'>
              {props.events.map(e =>
                <EventRender key={e.id} events={e}  />
              )}
            </TabPane>
            <TabPane tabId='1' >
              <Setting />
            </TabPane>
            <TabPane tabId='2' >
              <AddContent />
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Container>
  )
}


const Setting = () => {
  return(
    <Card>
      <CardHeader>Information</CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label>First Name</Label>
                <Input type='text' />
              </FormGroup></Col>
            <Col>
              <FormGroup>
                <Label>Last Name</Label>
                <Input type='text' />
              </FormGroup></Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>Username</Label>
                <Input type='text' />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input type='text' />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>Tel.</Label>
                <Input type='text' />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input type='text' />
              </FormGroup>
            </Col>
          </Row>
          <Button color='primary' >Save</Button>
        </Form>
      </CardBody>
    </Card>
  )
}

const AddContent = () => {
  return(
    <Card  >
      <CardHeader>Add Content</CardHeader>
      <CardBody >
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label>Title</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Author</Label>
                <Input />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>Image</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Url</Label>
                <Input />
              </FormGroup>
            </Col>
          </Row>
          <Button color='primary'>Post</Button>
        </Form>
      </CardBody>
    </Card>
  )
}

export default Profile

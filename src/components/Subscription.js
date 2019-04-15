import React from 'react'
import { Modal, ModalHeader, ModalBody, Card, CardGroup, CardBody,
  CardTitle, CardHeader, CardText, Button } from 'reactstrap'

const Subscription = props => {
  return (
    <Modal size="lg" isOpen={props.isOpen} centered>
      <ModalHeader className='bg-dark text-white' toggle={props.toggleModal}>Subscription Plans</ModalHeader>
      <ModalBody>
        <CardGroup>
          <Card className="text-center">
            <CardHeader bg-warning >
              <h4>3 Months</h4>
            </CardHeader>
            <CardBody>
              <CardTitle>12$</CardTitle>
              <CardText>
                  Lorem ipsum dolor
                <br />
                  Lorem ipsum dolor
                <br />
                  Lorem ipsum dolor
              </CardText>
              <Button color="info">Purchased</Button>
            </CardBody>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <h4> 6 Months</h4>
            </CardHeader>
            <CardBody>
              <CardTitle>19$</CardTitle>
              <CardText>
                  Lorem ipsum dolor
                <br />
                  Lorem ipsum dolor
                <br />
                  Lorem ipsum dolor
              </CardText>
              <Button color="info">Purchased</Button>
            </CardBody>
          </Card>
          <Card className="text-center">
            <CardHeader >
              <h4>12 Months</h4>
            </CardHeader>
            <CardBody>
              <CardTitle>34$</CardTitle>
              <CardText>
                  Lorem ipsum dolor
                <br />
                  Lorem ipsum dolor
                <br />
                  Lorem ipsum dolor
              </CardText>
              <Button color="info">Purchased</Button>
            </CardBody>
          </Card>
        </CardGroup>
      </ModalBody>
    </Modal>
  )
}

export default Subscription

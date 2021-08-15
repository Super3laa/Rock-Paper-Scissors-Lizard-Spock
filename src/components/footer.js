import { Container, Row, Col } from 'react-bootstrap'
import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import rules from '../assets/images/image-rules-bonus.svg'
export default function Footer() {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <Container>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>RULES</ModalHeader>
                <ModalBody>
                    <img src={rules} alt={rules}></img>
                </ModalBody>
            </Modal>
            <Row className="Footer">
                <Col>
                    <button className="button Rules" onClick={toggle}>RULES</button>
                </Col>
            </Row>
        </Container>
    )
}
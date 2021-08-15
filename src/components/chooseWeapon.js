import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import pentagon from '../assets/images/bg-pentagon.svg'
import Circle from './circle';
export default function chooseWeapon(props) {
    return (
        <React.Fragment >
            <Container>
                <Row>
                    <Col style={{ padding: "2rem" }}>
                        <div
                            className="pentagon"
                            style={{
                                backgroundImage: `url(${pentagon})`,
                            }}
                        >
                            {
                                props.content.pentagnWeapons.map((edge, i) => {
                                    return <div className={`pentagonEdge Item${i + 1}`} key={i}
                                        onClick={() => props.content.weaponClick(edge)}
                                    ><Circle key={i} weapon={`${edge}`} /></div>
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
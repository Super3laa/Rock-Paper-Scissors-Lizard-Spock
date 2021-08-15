import { Container, Row, Col } from 'react-bootstrap'
import React ,{useEffect} from 'react'
import logo from '../assets/images/logo-bonus.svg'
import { useSelector ,useDispatch} from 'react-redux'
export default function Header() {
    let score = useSelector(state => state.score).score
    let dispatch = useDispatch();
    useEffect(()=>{
        if (localStorage.getItem("RPSLS")){
          // eslint-disable-next-line react-hooks/exhaustive-deps
          dispatch({
                type:"updateScore",
                payload: JSON.parse(localStorage.getItem("RPSLS")).score
            })
        }else{
            localStorage.setItem("RPSLS",JSON.stringify({score:0}))
        }
      },[dispatch])
    return (
        <Container>
            <Row className="Header">
                    <Col xs={6}>
                        <img
                            className="logo"
                            src={logo}
                            alt="logo"
                        />
                    </Col>
                    <Col xs={6} dir={"rtl"}>
                        <div className="scoreboard">
                            <p className="scoreheader">S C O R E</p>
                            <p className="score">{score}</p>
                        </div>
                    </Col>

            </Row>
        </Container>
    )
}
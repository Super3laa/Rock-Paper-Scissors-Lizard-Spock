import { Container, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Circle from './circle';
import pentagnWeapons from './pentagonWeapons';
import { useDispatch } from 'react-redux';

export default function LoadingWinner(props) {
    const [loadingStatus, setLoadingStatus] = useState({
        loading: 1,
        seconds: 0,
        counter: 0,
        weapon: 'rock',
        winner :-1
    })
    const dispatch = useDispatch();
    useEffect(() => {
        if (loadingStatus.loading===1) {
            setTimeout(() => {
                setLoadingStatus({
                    loading: loadingStatus.seconds >= 5 ? 0 : 1,
                    seconds: loadingStatus.seconds + 1,
                    weapon: pentagnWeapons[loadingStatus.counter],
                    counter: loadingStatus.counter === 4 ? 0 : loadingStatus.counter + 1,
                    winner:-1
                })
            }, 150);
        } else {
            setLoadingStatus({
                loading: 0,
                seconds: 0,
                weapon: props.gameStatus.houseWeapon,
                counter: 0,
                winner : props.gameStatus.isWin 
            })
            if(loadingStatus.seconds===0 && props.gameStatus.isWin===1){
                dispatch({
                    type : 'incrementScore',
                    payload : null
                })
                let data = JSON.parse(localStorage.getItem("RPSLS"));
                localStorage.setItem("RPSLS",JSON.stringify({score:data.score+1}))
            }
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadingStatus.seconds,loadingStatus.winner])
    function handlePlayAgain(){
        props.functions.cleanUp();
    }
    return (
        <React.Fragment >
            <Container>
                <Row>
                    <Col className="chooseWeaponCol">
                        <Circle weapon={props.gameStatus.userWeapon} large={true} winner={loadingStatus.winner === 1 ? 1: 0} />
                    </Col>
                    {
                        loadingStatus.loading === 0 ? 
                        <Col className="GameStatusCol Desktop" >
                        <p>{loadingStatus.winner === 1? "YOU WIN" : loadingStatus.winner=== 0 ?"YOU LOSE":"DRAW"}</p>
                        <button className="button PlayAgain" onClick={handlePlayAgain}>PLAY AGAIN</button>
                         </Col>:null
                    }
                    
                    <Col className="chooseWeaponCol">
                        <Circle weapon={loadingStatus.weapon} large={true}  winner={loadingStatus.winner === 1 ||loadingStatus.winner === -1 ? 0 : 1}  />
                    </Col>
                </Row>
                {
                    loadingStatus.loading ===0?
                    <Row className="MobileScore">
                    <Col className="GameStatusCol">
                        <p>{loadingStatus.winner === 1? "YOU WIN" : loadingStatus.winner=== 0 ?"YOU LOSE":"DRAW"}</p>
                        <button className="button PlayAgain" onClick={handlePlayAgain}>PLAY AGAIN</button>
                    </Col>
                </Row>:null
                }
            </Container>
        </React.Fragment>
    )
}
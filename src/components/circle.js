import React from 'react';
import weaponMap from './weapons';
export default function Circle(props){
    let cicrleData = weaponMap.get(props.weapon)
    return(
        <React.Fragment>
            <div className={`borderCircle ${props.large ? "lg":'' } ${props.winner === 1 ? "winner" : ""}`}
                style={{
                    boxShadow: `inset 0px 5px 0px 0px rgb(220 220 220) , 0px 5px 0px 1px ${cicrleData.shadow}`,
                    border: `0.8rem solid ${cicrleData.border}`
                }}
            >
                <img
                    className = "CircleIcon winner"
                    src= {`${cicrleData.image}`}
                    alt={`${props.weapon}`}
                />
            </div>
        </React.Fragment>
    )
}
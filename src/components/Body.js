import React , {useState}from 'react';
import ChooseWeapon from './chooseWeapon';
import LoadingWinner from './LoadingWinner';
import pentagnWeapons from './pentagonWeapons';
export default function Body() {
    const [gameStatus,setGameStatus] = useState({
        userWeapon:'',
        houseWeapon:'',
        loadingWinner:0,
        isWin:0
    });
    function cleanUp(){
        setGameStatus({
            userWeapon:'',
            houseWeapon:'',
            loadingWinner:0,
            isWin:0
        })
    }
    const handleWeaponClick = (userWeapon)=>{
        let houseWeapon = pentagnWeapons[Math.floor(Math.random()*pentagnWeapons.length)];
        let result = calculateWinner(userWeapon,houseWeapon)
        setGameStatus({
            userWeapon:userWeapon,
            houseWeapon,
            loadingWinner:1,
            isWin:result
        });
    }
    function calculateWinner(userWeapon,houseWeapon){
        const weaponsPowerOrder = ["paper","rock","lizard","spock","scissors"];
        const userWeaponIndex =weaponsPowerOrder.indexOf(userWeapon);
        const houseWeaponIndex = weaponsPowerOrder.indexOf(houseWeapon);
        if (userWeaponIndex > houseWeaponIndex){
            if ((userWeaponIndex - houseWeaponIndex) % 2 === 0){
                return 1
            }else{
                return 0
            }
        }else if(userWeaponIndex < houseWeaponIndex){
            if ((userWeaponIndex - houseWeaponIndex )% 2 === 0){
               return 0
            }else{
                return 1
            }
        }else{
            return -1
        }
    }
    return (
        <React.Fragment >
            {
                gameStatus.userWeapon === '' ?
                <ChooseWeapon content={{
                    pentagnWeapons,
                    weaponClick: handleWeaponClick,
                }}/>
              :gameStatus.loadingWinner === 1 ?
                <LoadingWinner gameStatus={gameStatus} functions={{cleanUp:cleanUp}}/>:null
            }
        </React.Fragment>
    )
}
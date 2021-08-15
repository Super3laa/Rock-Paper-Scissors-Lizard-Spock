const score=(state={score:0},action)=>{
    switch (action.type){
        case 'incrementScore':
            let newState = {
                score :state.score+1
            }
            return newState;
        case 'updateScore':
            return {
                score :action.payload
            };
        default:
            return state;
    }
}
export default score;
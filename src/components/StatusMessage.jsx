import React from 'react';
const StatusMessage = ({winner, gamingBoard})=>{
    // eslint-disable-next-line react/prop-types
    const {squares, isXNext} = gamingBoard;
    const noMovesLeft = squares.every(el => el !== null);
    const nextPlayer = `${isXNext?'X':'O'}`;
    //const statusMessage = winner?`winner is ${winner}`:`Next Player is ${nextPlayer}`;
    const renderStatusMesaage = () => {
        if(winner){
            return <React.Fragment>winner is {' '}
            <span className={winner==='X'?'text-green':'text-orange'}>{winner}</span></React.Fragment>;
        }
        if(!winner && noMovesLeft){
            return <React.Fragment><span className="text-orange">O</span>and{' '}
            <span className="text-green">X</span> tied</React.Fragment>;
        }
        if(!winner && !noMovesLeft){
            return <React.Fragment>Next Player is {' '}
            <span className={isXNext?'text-green':'text-orange'}>{nextPlayer}</span></React.Fragment>;
        }
        return null;
    };
    return <h2 className="status-message">{renderStatusMesaage()}</h2>;
};
export default StatusMessage;
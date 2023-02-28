import React,{useState} from "react";
import Btn from "./button";

const Cardbox = ({topic, name, img, content}) => {
    let [score,rescore] = useState(0)
    const vote = () => {
        if(score >9){
            alert ("Can't vote more")
        }
        else{
            rescore(score+1);
        }

    };
    const unvote =() => {
        if(score < 1){
            alert ("Can't unvote more")
        }
        else{
            rescore(score-1);
        }
    };

    return (
        <div className="card">
            <div className="card-text">
                <h3>{topic}</h3>
                <h4>{name}</h4>
                <p>{content}</p>
            </div>
            <div className="card-img">
                <img src={img}/> 
            </div>
            <div className="card-btn">
                <Btn className="btn" content='Click to vote' onClick={vote} />
                <div className="vote-container">{score === 0 ? "MIN" : score === 10 ? "MAX" : score}</div>
                <Btn className="btn" content='Click to Unvote' onClick={unvote} />
            </div>
            
        </div>
    );
}

export default Cardbox;
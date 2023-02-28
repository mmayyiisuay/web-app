import React from "react";

const Btn = ({content, onClick}) => {
    return (
        <div>
            <button onClick={onClick} >{content}</button>
        </div>
    );
}

export default Btn;
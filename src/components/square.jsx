import React from "react"; 
const square = (props) => {
    return (
        <div 
        onClick={props.onClick}
        style={{border : "1px solid",
             height : "100px",
              width : "100px",
               display : "flex",
                justifyContent : "center",
                 alignItems : "center",
                }}
           className="square">
            <h5>{props.value}</h5>
        </div>
    )
}
export default square ;
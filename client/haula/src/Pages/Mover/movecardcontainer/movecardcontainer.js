import React from "react";
import "./movecardcontainer.css";

export const MoveCardContainer = ({ children }) => {
    console.log(children)
    return <div className="flex-1">{children}</div>
};

// export default MoveCardContainer;
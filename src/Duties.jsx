import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
const Duties = ({ duties }) => {
    return (
        <div className="duties">
            {duties.map((item) => {
                return (
                    <div className="dutie" key={uuidv4()}>
                        <FaAngleDoubleRight className="icon" />
                        <p className="item">{item}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Duties;

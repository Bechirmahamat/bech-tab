import React from "react";
import Duties from "./Duties";
const Tab = ({ data, index }) => {
    const { title, company, dates, duties } = data;
    return (
        <div className="">
            <h1 className="title">{title}</h1>
            <span className="company">{company}</span>
            <span className="date">{dates}</span>
            <Duties duties={duties} />
        </div>
    );
};

export default Tab;

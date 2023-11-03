import React from "react";

const Button = ({ btn, Handler, active }) => {
    return (
        <div className="btn-container">
            {btn.map((name, index) => (
                <button
                    key={index}
                    className={
                        active == index
                            ? "btn-hover-success active"
                            : "btn-hover-success"
                    }
                    onClick={() => {
                        Handler(index);
                    }}
                >
                    {name}
                </button>
            ))}
        </div>
    );
};

export default Button;

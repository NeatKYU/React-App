import React, { Component } from 'react';

const Dropdown = ({options}) => {
    const renderedOption = options.map((option) => {
        return (
            <div key={option.value}>
                {option.label}
            </div>
        );
    });

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">Select Color</div>
                    <div className="menu visible transition">
                        {renderedOption}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;
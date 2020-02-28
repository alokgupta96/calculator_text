import React from 'react';
import './Home.css';

class HomeComponent extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="App">
                <div className="calculator_section">
                    <div className="calculator_inner_section">
                        <div className="calculator_tab">
                            <p className="mg_none txt_right calculation">256*4</p>
                            <p className="mg_none txt_right calculation_result">1,024</p>
                            <div className="calculator_inner_tab">
                                <div>
                                    <p>
                                        <ul className="calculator_list">
                                            <li className="btn_shadow">C</li>
                                            <li className="btn_shadow">+/-</li>
                                            <li className="btn_shadow">%</li>
                                            <li className="active_btn">/</li>
                                        </ul>
                                    </p>
                                    <p>
                                        <ul className="calculator_list">
                                            <li className="btn_shadow">7</li>
                                            <li className="btn_shadow">8</li>
                                            <li className="btn_shadow">9</li>
                                            <li className="active_btn">*</li>
                                        </ul>
                                    </p>
                                    <p>
                                        <ul className="calculator_list">
                                            <li className="btn_shadow">4</li>
                                            <li className="btn_shadow">5</li>
                                            <li className="btn_shadow">6</li>
                                            <li className="active_btn">-</li>
                                        </ul>
                                    </p>
                                    <p>
                                        <ul className="calculator_list">
                                            <li className="btn_shadow">1</li>
                                            <li className="btn_shadow">2</li>
                                            <li className="btn_shadow">3</li>
                                            <li className="active_btn">+</li>
                                        </ul>
                                    </p>
                                    <p>
                                        <ul className="calculator_list">
                                            <li className="btn_shadow">0</li>
                                            <li className="btn_shadow">.</li>
                                            <li className="active_btn equal_btn">=</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default HomeComponent;

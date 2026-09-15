import React from "react";
import { useState } from "react";
function RandomColor() {
    const [color, setColor] = useState('');

    function generateColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `rgb(${r}, ${g}, ${b})`;
        setColor(color);
    }
    return (<>
        <section className="container-fluid mt-5 ">
            <div className="row justify-content-center">
                <div className="col-5">
                    <div className="card">
                        <div className="card-header h3 text-center bg-primary text-white">
                            CHANGE INTO RANDOM COLOUR
                        </div>
                        <div className="card-body" >
                                <button className="btn btn-dark  w-50 d-block mx-auto mt-2 " onClick={generateColor}>Change</button>
                        </div>
                        <div className="card-footer" style={{ width: "100", height: "500px", backgroundColor: `${color}` }}></div>

                    </div>
                </div>
            </div>
        </section>


    </>)
}

export default RandomColor;
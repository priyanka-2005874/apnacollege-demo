import React from "react";
import { useState } from "react";
function ChangeColour(){
    const [input,setInput] = useState('');
    const [color,setColor] = useState('');

    function changeColor(e){
        e.preventDefault();
        setColor(input);
    }
    return(<>
    <section className="container-fluid mt-5 ">
        <div className="row justify-content-center">
            <div className="col-5">
                <div className="card">
                    <div className="card-header h3 text-center bg-secondary text-white">
                      CHANGE COLOUR
                    </div>
                    <div className="card-body" >
                        <form >
                          <input type="text" placeholder="enter the color" value={input} className="form-control" onChange={(e)=>setInput(e.target.value)}/>
                           <button className="btn btn-dark  w-50 d-block mx-auto mt-2 " onClick={changeColor}>Change</button>
                        </form>
                    </div>
                    <div className="card-footer" style={{width:"100", height:"500px",backgroundColor:`${color}`}}></div>

                </div>
            </div>
        </div>
    </section>
         
    
    </>)
}

export default ChangeColour;
import { useState } from "react"

function EvenOdd(){
    const [number,setNumber] = useState('');
    const [result,setResult] = useState('');

    function checkingNumber(){
        if(number ===''){
            setResult("Enter the valid number");
        }
        else if(Number(number)%2==0){
            setResult("Even Number");
        }else{
            setResult("Odd Number");
        }
    }
    return(
        <>
        <section className="container-fluid mt-4">
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-header bg-dark text-white text-center h3">
                             Even Odd Checker
                        </div>
                        <div className="card-body">
                            <form>
                                <input type="text" 
                                placeholder="Enter the Number"
                                value={number}
                                onChange={(e)=>setNumber(e.target.value)}
                                className="form-control"/> 
                            </form>
                            <button className="btn btn-primary mt-4 d-block mx-auto" onClick={checkingNumber}>Check</button>
                        </div>
                        <div className="card-footer h3 text-center bg-danger" style={{width:"100",height:"200px"}}>
                            {`${number} ${result}`}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default EvenOdd;
import React, { useState } from "react";
function PrimeNumber(){
    const [number,setNumber] = useState('');
    const [result,setResult] = useState('');

    function checkPrime(){
        let num = Number(number);

        if(number ===''){
            setResult("Enter valid number");
            return;
        }
        if(num<=1){
            setResult("Not a prime number");
            return;
        }
        let isPrime=true;
        for(let i=2;i<Math.sqrt(num);i++){
            if(num%i===0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            setResult("Prime Number")
        }else{
            setResult("Not a Prime Number")
        }
    }
    return(
        <>
        <section className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header bg-secondary text-center h4">
                              Check Number is Prime or not
                        </div>
                        <div className="card-body bg-success">
                            <form>
                                <input type="text"
                                placeholder="Enter the number.."
                                value={number}
                                onChange={(e)=>setNumber(e.target.value)}
                                className="form-control"
                                />
                            </form>
                            <button className="btn btn-primary d-block mx-auto mt-3" onClick={checkPrime}>Check</button>

                        </div>
                        <div className="card-footer bg-secondary text-white text-center">
                             <h3>{result}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}
export default PrimeNumber;
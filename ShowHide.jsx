import { useState } from "react";
function ShowHide(){
    const[display,setDisplay] = useState(true);   

return(
 <section className="container-fluid mt-4">
    <div className="row justify-content-center">
        <div className="col-4 ">
            <div className="card">
                <div className="card-header">
                    {display && (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrYUf5aI3L6T78p0LBXg5DLBiJTDHgMY9hg&s" className="img-fluid" width={"100%"}/>)}
                    
                </div>
                <div className="card-body">
                    <button  className="btn btn-danger w-50 " onClick={()=>setDisplay(true)} >Show</button>
                    <button  className="btn btn-success w-50 " onClick={()=>setDisplay(false)}>Hide</button>
                </div>
            </div>
        </div>
    </div>
 </section>
)
}

export default ShowHide;
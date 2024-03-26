import React from "react";

function Signup() {
  return (
    
      <div>
        <div className="row">
        <div className='col-sm-3'/>

      <div className="col-sm-6" style={{margin:'50px', border:'1px black solid', padding:"20px"}}>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        
        <a href="./signup"><label className="form-check-label" htmlFor="exampleCheck1">Don't Have An Account?</label></a>
                <br/>  <br/>

            <div>
                <button type="submit" className="btn btn-primary" >Submit</button>
          </div>      
         
      </form>
      </div>
      <div className='col-sm-3'/>
    </div>
      </div>
  );
}
export default Signup;

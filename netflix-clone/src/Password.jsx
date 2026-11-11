import { useState } from "react";

function Password(){
    const [password , setPassword]=useState(false)
    return(
         <div>
           
                <input type={password ? "text" : "password" }  placeholder="enter the password" />
                <button type="submit" onClick={()=>{setPassword(!password)}}>{password ? "hide" : "show"}</button>
        
         </div>
    );
}

export default Password;
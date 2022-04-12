import { NavItem } from "react-bootstrap";
import AuthContext from "./AuthContext";

function AuthContextProvider()
{
    
   const defaultvalue=[];
   const[config,setconfig]=usestate(defaultvalue);

   function addItemHandler(picture){
    setconfig(function (prevConfig){
        return [picture,...prevConfig];// in starting of array prevexpenses add a expense element
   });
   }

   const val1={
       gallery:config,
       addItem:{addItemHandler}

   }



    return(

        <AuthContext.Provider value={val1}>
           {props.children}
        </AuthContext.Provider>
       )

}


export default AuthContextProvider;
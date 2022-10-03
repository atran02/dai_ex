import { Button, Loader } from 'semantic-ui-react'
import LoginForm from '../comps/LoginForm';

//the router and states are mostly used in the page for 
//data/information state management
import {useRouter} from 'next/router';
import {useState} from 'react';

export default function Home() {

  const r = useRouter();

  //before, during, after
  const [loginState, setLoginState] = useState("before")

  //c for color
  var c = "blue";
  var btnText = "Login";

  if(loginState === "before"){
    c = "blue";
    btnText = "Login";
  }if(loginState === "during"){
    c = "green";
    btnText = "Logging in...";
  }if(loginState === "after"){
    c = "grey";
    btnText = "yasss!";
  }

  // const HandleButton = () => {
  //   if(loginState === "before"){
  //     setLoginState("during");
  //   }if(loginState === "during"){
  //     setLoginState("after");
  //   }

  //   if(loginState === "after"){
  //     r.push("/dashboard");
  //   }
  // }

  const Login = async () => {
    setLoginState("during");

    //its gonna take time
    //mock time passing, useless code
    await new Promise(resolve=>setTimeout(resolve, 2000));

    setLoginState("after");

    //its gonna stall for a few secs
    //mock time passing, useless code
    await new Promise(resolve=>setTimeout(resolve, 2000));

    r.push("/dashboard");
  }

  return(
    <div>
      {/* <Button color={c}onClick={()=>{Login()}
    }>{btnText}
    {loginState === "during" && <Loader active />}
    </Button> */}
    <LoginForm 
    loginState={loginState}
    onLoginClick={()=>Login()} 
    />
    </div>
  )
}
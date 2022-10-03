import { Button, Loader, Input } from 'semantic-ui-react'

export default function LoginForm({
    loginState="before",
    onLoginClick=()=>{}
}){

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

    return<div>
        <h3>Login Form</h3>
        <Input 
        disabled={loginState !== "before"}
        placeholder="email" />
        <Input placeholder="password" />
        <hr />
        <Button color={c}onClick={onLoginClick}>
            {btnText}
            {loginState === "during" && <Loader active />}
        </Button>
    </div>
}
import React, {useState, useEffect} from "react";
import '../../App.css';
import './SignUp.css';

function SignUp() {
  const[user, setUser] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[emailError, setEmailError] = useState("");
  const[passwordError, setPasswordError] = useState("");
  const[hasAccount, setHasAccount] = useState(false);

    return <h1 className='sign-up '>SIGN UP</h1>;
}
export default SignUp;
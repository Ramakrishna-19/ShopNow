import React from 'react'
import './CSS/loginsignup.css'


const LoginSignup = () => {

    const [state, setState] = React.useState("Sign Up");
    const [message, setMessage] = React.useState("");
    const [formData, setFormData] = React.useState({
      username: "",
      password: "",
      email: ""
    })

    const changeHandler = (e)=>{
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

    const login = async()=>{
      console.log("Login Function Executed", formData);
      let responseData;

      await fetch('https://shopnow-backend-6i14.onrender.com/login', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      })
      .then((response)=>response.json())
      .then((data)=>responseData=data);

      if(responseData.success){
        setMessage("Login successful");

        setTimeout(() => {
          localStorage.setItem('auth-token', responseData.token);
          window.location.replace("/");
        }, 1000);
      }
      else{
        setMessage("Can not find the user");

        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
    }


    const signup = async()=>{
        console.log("Signup Function Executed", formData);
        let responseData;
        await fetch('https://shopnow-backend-6i14.onrender.com/signup', {
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }).then((response)=>response.json()).then((data)=>responseData=data)

        if(responseData.success){
          localStorage.setItem('auth-token', responseData.token);
          window.location.replace("/");
        }
        else{
          alert(responseData.error);
        }
    }

  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>{state}</h1>
            <div className="loginsignup-fields">
                {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Your Name'/> : <></>}
                <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email Address'/>
                <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password'/>
            </div>
            {message && <p style={{textAlign:"center", color:"green"}}>{message}</p>}
            <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
            {state==="Sign Up"?
            <p className="loginsignup-login">Already have an account? <span onClick={()=> {setState("Login")}} style={{cursor: "pointer"}}>Login here</span></p> : <></>}
            {state==="Login"?
            <p className="loginsignup-login">Create an account? <span onClick={()=> {setState("Sign Up")}} style={{cursor: "pointer"}}>Click here</span></p> : <></>}
            <div className="loginsignup-agree">
                <input type="checkbox" name='' id='' />
                <p>By continuing, i agree to the terms and policies</p>
            </div>
        </div>
      
    </div>
  )
}

export default LoginSignup

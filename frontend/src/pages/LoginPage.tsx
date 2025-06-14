import useNavigationHandlers from '../hooks/useNavigationHandlers';
import { useState } from 'react';

function LoginPage() {
  const { handleSignup, 
          handleLogin, 
          handleHome
        } = useNavigationHandlers();

  type FormInputs = {
    uname: string,
    pass: string
  }

  const [inputs, setInputs] = useState<FormInputs>({uname: "", pass: ""});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try{
      const response = await fetch ("https://my-api.com/my-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputs)
      });

      if(!response.ok){
        throw new Error("Server said no: ${response.status}");
      }

      const data = await response.json();
      console.log("Success: ", data);
    }catch(error){
      console.error('Error submiting form: ', error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <header style={{ borderBottom: "5px solid red", padding: "20px 0" }}>
        <button 
        style={{ float: "left" }}
        >
          Menu
        </button>
        <button 
        onClick={handleHome}
        style={{ textAlign: "center"}}
        >
          Home
        </button>
        <button 
        onClick={handleSignup}
        style={{ float: "right" }}
        >
          sign up
        </button>
        <button 
        onClick={handleLogin}
        style={{ float: "right" }}
        >
          log in
        </button>
      </header>

      <h2 className="text-4xl font-semibold">Log into your account</h2>
      <p className="mt-4 text-lg">Log in and start gaming ~~</p>

      <form onSubmit={handleSubmit}>
        <label>Enter name:
          <br />
          <input
          type='text'
          name='uname'
          value={inputs.uname || ""}
          onChange={handleChange}
          />
        </label>
        <br/>
        <label>Enter password:
          <br />
          <input
          type='text'
          name='pass'
          value={inputs.pass || ""}
          onChange={handleChange}
          />
        </label>
        <br/>
        <input type='submit'/>
      </form>

      <p>Don't have an account?</p>
      <button 
        onClick={handleSignup}
        >
          Sign up
        </button>
    </div>
  )
}

export default LoginPage
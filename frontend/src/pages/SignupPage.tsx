import { useState } from 'react';
import useNavigationHandlers from '../hooks/useNavigationHandlers';

function SignupPage() {
  const { handleSignup, 
          handleLogin, 
          handleHome
        } = useNavigationHandlers();

  type FormInputs = {
      uname: string,
      pass: string,
      passConfirm: string
    }
  
    const [inputs, setInputs] = useState<FormInputs>({uname: "", pass: "", passConfirm: ""});
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setInputs(values => ({ ...values, [name]: value }));
    };
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try{
        console.log("Hello from Submit")
        console.log("Sending request to:", import.meta.env.VITE_API_URL);
        const response = await fetch (`${import.meta.env.VITE_API_URL}/submit`, {
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

      <h2 className="text-4xl font-semibold">Sign up for an account</h2>
      <p className="mt-4 text-lg">Here you can create your account</p>

      <form onSubmit={handleSubmit}>
        <label>Enter name:
          <br />
          <input
          placeholder='e.g. John Doe'
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
          placeholder='e.g. 123'
          type='text'
          name='pass'
          value={inputs.pass || ""}
          onChange={handleChange}
          />
        </label>
        <br/>
        <label>Confirm password:
          <br />
          <input
          placeholder='Write your password again'
          type='text'
          name='passConfirm'
          value={inputs.passConfirm || ""}
          onChange={handleChange}
          />
        </label>
        <br/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default SignupPage
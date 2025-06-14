import useNavigationHandlers from '../hooks/useNavigationHandlers';

function AboutPage() {
  const { handleSignup, 
          handleLogin, 
          handleHome
        } = useNavigationHandlers();

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

      <h2 className="text-4xl font-semibold">Learn all about the page</h2>
      <p className="mt-4 text-lg">[About info will go here]</p>
    </div>
  )
}

export default AboutPage
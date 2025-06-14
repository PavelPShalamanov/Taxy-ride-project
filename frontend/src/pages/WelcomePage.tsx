import "../styles/WelcomePage.css"
import useNavigationHandlers from '../hooks/useNavigationHandlers';

function WelcomePage() {
  
  const { handleStart, 
          handleLeaderboard, 
          handleAbout, 
          handleSignup, 
          handleLogin, 
          handleHome
        } = useNavigationHandlers();

  return (
    <div id='rootDiv'>
      {/* Menu and Log In */}
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

      {/* Title */}
      <h1 style={{ marginTop: "100px", fontSize: "64px" }}>
        T A X Y<br />R I D E
      </h1>

      {/* Buttons */}
      <div style={{ marginTop: "50px" }}>
        <button 
        onClick={handleStart}
        className="titleButton"
        >
          START GAME
        </button>
        <br />
        <button 
        onClick={handleLeaderboard}
        className="titleButton"
        >
          LEADERBOARD
        </button>
        <br />
        <button 
        onClick={handleAbout}
        className="titleButton"
        >
          ABOUT
        </button>
      </div>
    </div>
  );
}

export default WelcomePage

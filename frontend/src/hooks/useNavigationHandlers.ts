import { useNavigate } from 'react-router-dom';

const useNavigationHandlers = () => {
  const navigate = useNavigate();

  return {
    handleStart: () => navigate('/game'),
    handleLeaderboard: () => navigate('/leaderboard'),
    handleAbout: () => navigate('/about'),
    handleSignup: () => navigate('/signup'),
    handleLogin: () => navigate('/login'),
    handleHome: () => navigate('/'),
  };
};

export default useNavigationHandlers;

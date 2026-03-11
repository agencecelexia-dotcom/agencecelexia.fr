import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ArtisanWebsites = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/services/site-web', { replace: true });
  }, [navigate]);

  return null;
};

export default ArtisanWebsites;

import { useNavigate } from 'react-router-dom';

export const useScrollToSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    // Si on est déjà sur la page d'accueil
    if (window.location.hash === '' || window.location.hash === '#/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Si on est sur une autre page, naviguer vers l'accueil puis scroller
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return scrollToSection;
};

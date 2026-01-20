import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Scroll directly during render (not inside useEffect)
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }

  return null;
};

export default ScrollToTop;
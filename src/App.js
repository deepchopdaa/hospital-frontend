
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import AppRoutes from './Routes/AppRoute';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />

      <AppRoutes />

      <Footer />
    </div>
  );
}

export default App;

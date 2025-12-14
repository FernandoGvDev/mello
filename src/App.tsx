import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./Routes";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Header />
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

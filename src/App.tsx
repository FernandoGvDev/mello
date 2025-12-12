import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./Routes";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
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

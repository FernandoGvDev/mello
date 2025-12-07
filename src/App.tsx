import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Home from "./pages/home/index"
import Projetos from "./pages/projetos/index"
import Sobre from "./pages/sobre/index"

export const routes = [
  { path: "/", component: Home },
  { path: "/sobre", component: Sobre },
  { path: "/projetos", component: Projetos },
];

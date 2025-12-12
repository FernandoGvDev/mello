import Home from "./pages/home/index" //fazer em todas as rotas
import Projetos from "./pages/projetos/index"

export const routes = [
  { path: "/", component: Home },
  //{ path: "/sobre", component: Sobre },
  //{ path: "/contato", component: Contato },
  { path: "/projetos", component: Projetos },
];

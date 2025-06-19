import { useState } from 'react';

// Importando todas as páginas
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import EscolherPerfil from './pages/EscolherPerfil';
import EscolherPcd from './pages/EscolherPcd';
import Home from './pages/Home';
import Aprender from './pages/Aprender';
import Atendente from './pages/Atendente';
import Servicos from './pages/Servicos';

function App() {
  const [pagina, setPagina] = useState("login");
  const [perfil, setPerfil] = useState("");
  const [pcdSelecionados, setPcdSelecionados] = useState([]);

  const togglePcd = (tipo) => {
    setPcdSelecionados(prev =>
      prev.includes(tipo) ? prev.filter(p => p !== tipo) : [...prev, tipo]
    );
  };

  const props = { setPagina, setPerfil, perfil, pcdSelecionados, togglePcd };

  switch (pagina) {
    case "cadastro": return <Cadastro {...props} />;
    case "perfil": return <EscolherPerfil {...props} />;
    case "pcd": return <EscolherPcd {...props} />;
    case "home": return <Home {...props} />;
    case "aprender": return <Aprender {...props} />;
    case "atendente": return <Atendente {...props} />;
    case "servicos": return <Servicos {...props} />;
    default: return <Login {...props} />;
  }
}

export default App;
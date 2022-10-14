//Es el nucleo de mi proyecto
//une los componentes
import Heder from "./componentes/heder";
import ListaPaciente from "./componentes/listapaciente";
import Pacientes from"./componentes/pacientes";
import Formulario from "./componentes/formulario";
import Error from "./componentes/error";



function App() {
  return (
    <div className="mt-20">
      <Heder/>
      
      <ListaPaciente/>
      <Formulario/>
      <Error/>
      <Pacientes/>
    </div>
  )
}

export default App

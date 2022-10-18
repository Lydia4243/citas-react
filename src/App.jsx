//Es el nucleo de mi proyecto
//une los componentes
import Heder from "./componentes/heder"
import ListaPaciente from "./componentes/listapaciente"
import Pacientes from"./componentes/pacientes"
import Formulario from "./componentes/formulario"



function App() {
  return (
    <div className="mt-20">
      <Heder/>
      <Formulario/>
      <ListaPaciente/>
      <Pacientes/>
    </div>
  )
}

export default App

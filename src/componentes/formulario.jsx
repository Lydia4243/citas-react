function Formulario() {
    return (
        <div className="md:w-1/2 mx5 lg-w">
            <h2 className="text-center font-black text-3xl mb-5">Seguimiento Pacientes</h2>
            <p className="text-center mt-5 text-lg mb-10">Añade 
            Pacientes <span className="text-indigo-600 font-bold"> Administrarlos</span></p>
        
            <form className=" bg-slate-300  py-10 px-8 shadow-md rounded-lg">
        
        
        
        <div>
            <label className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
            type="text"
            placeholder="Nombre de la Mascota"></input>
            
            <label className="block text-gray-700 uppercase font-bold">Propietario</label>
            <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
            type="text"
            placeholder="Propietario"></input>
            <label className="block text-gray-700 uppercase font-bold">email</label>
            <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
            type="text"
            placeholder="email"></input>
            <label className="block text-gray-700 uppercase font-bold">Alta</label>
            <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
            type="text"
            placeholder="Alta"></input>
            <label className="block text-gray-700 uppercase font-bold">Sintomas</label>
            <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
            type="text"
            placeholder="Sintomas"></input>
            
            


        </div>
     </form>

    </div>    
    )
}
export default Formulario;






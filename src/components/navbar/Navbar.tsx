import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { useState } from "react";


function Navbar() {

    const navigate = useNavigate();

    const [mensagem, setMensagem] = useState("");
    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        setMensagem("O usuário foi desconectado com sucesso!");
        setMostrarMensagem(true);

        setTimeout(() => {
            setMostrarMensagem(false);
        }, 3000);

        navigate('/');
    }
    
    return (
        <>
            {mostrarMensagem && (
            <div className="fixed top-4 right-4 z-50">
                <div className="p-3 bg-green-100 border-l-4 border-green-500 text-green-700 rounded shadow max-w-sm">
                <p className="font-bold">Sucesso!</p>
                <p>{mensagem}</p>
                </div>
            </div>
            )}

            {
                <div className="w-full bg-floresta text-white flex justify-center py-4">
                    <div className="container flex flex-wrap justify-between items-center text-lg">
                        <Link to="/home" className="text-2xl font-bold group relative inline-block">
                        <span>Blog Pessoal</span>
                        </Link>

                        <div className="flex gap-6 flex-wrap items-center">
                        <div className="group relative inline-block text-lg ">
                            <Link to='/postagens'>Postagens</Link>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                        </div>

                        <Link to="/temas" className="group relative inline-block hover:underline-none transition-all duration-500 ease-out">
                            <span>Temas</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                        </Link>

                        <Link to="/cadastrartema" className="group relative inline-block hover:underline-none transition-all duration-500 ease-out">
                            <span>Cadastrar tema</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                        </Link>

                        <div className="group relative inline-block text-lg transition-all duration-500 ease-out">
                            <Link to='/perfil' className='cursor-pointer'>Perfil</Link>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                        </div>

                        <Link to="" onClick={logout} className="group relative inline-block hover:underline-none transition-all duration-500 ease-out">
                            <span>Sair</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                        </Link>
                        </div>
                    </div>
                    </div>
            }
        </>
    )
}

export default Navbar
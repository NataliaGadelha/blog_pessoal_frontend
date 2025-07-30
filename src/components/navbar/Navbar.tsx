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
                <p className="font-bold">Sucesso</p>
                <p>{mensagem}</p>
                </div>
            </div>
            )}

            <div className='w-full bg-floresta text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        Postagens
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                        Perfil
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
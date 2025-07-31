/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import type Tema from "../../../models/Tema"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import { Bookmarks, CheckCircle, XCircle } from "@phosphor-icons/react"

function DeletarTema() {

    const navigate = useNavigate()

    const [tema, setTema] = useState<Tema>({} as Tema)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarTema() {
        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Tema apagado com sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                alert('Erro ao deletar o tema.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/temas")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar tema</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o tema a seguir?</p>
            <div  className="flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <header 
                        className="flex items-center justify-between py-3 px-6 text-gray-500 font-bold text-2xl">
                        Tema
                        <Bookmarks size={32} weight="light" />
                    </header>
                <hr className="border-slate-300 mx-4" />
                <div className="p-5 flex-1">
                <p className="text-xl text-gray-500">{tema.descricao || "Sem descrição"}</p>
                </div>
                <div className="flex gap-3 px-4 pb-4 pt-2">
                    <button 
                        className="w-full flex items-center justify-between py-1.5 px-5 rounded-lg font-medium text-white bg-gradient-to-r from-rose-500 to-red-600 hover:brightness-90 transition-all shadow-sm"
                        onClick={retornar}>
                        Não
                        <XCircle size={32} />
                    </button>
                    <button 
                        className="w-full flex items-center justify-between py-1.5 px-5 rounded-lg font-medium text-white bg-gradient-to-r from-teal-400 to-ligth-green hover:from-ligth-green hover:to-teal-400 transition-all shadow-sm"
                                   onClick={deletarTema}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                        <CheckCircle size={32} />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarTema
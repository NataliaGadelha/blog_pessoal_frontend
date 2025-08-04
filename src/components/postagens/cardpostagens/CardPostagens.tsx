import { PencilLine, Trash } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import type Postagem from "../../../models/Postagem"

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagens({postagem}: CardPostagensProps) {
  return (
        <div className="flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
            <div className="flex items-center gap-4 py-3 px-6 text-gray-500 font-bold text-2xl">
                    <img
                        src={postagem.usuario?.foto || "https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png"}
                        className='h-12 rounded-full'
                        alt={postagem.usuario?.nome} />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {postagem.usuario?.nome}
                    </h3>
                        {/* <BookOpen size={32} weight="light" /> */}
                    <img
                        src="https://img.icons8.com/?size=100&id=zVnY4LoD0Omq&format=png&color=52b788"
                        alt="ícone"
                        className="h-8 w-8 ml-auto"
                    />
            </div>
        <hr className="border-slate-300 mx-4" />
                <div className='p-5 flex-1'>
                    <div className="text-1xl text-gray-500">
                    <h4 className='text-lg font-semibold text-floresta'>{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                    </div>
                </div>

        <div className="flex gap-3 px-4 pb-4 pt-2">
            <Link to={`/editarpostagem/${postagem.id}`} className="flex-grow">
                <button
                    type="button"
                    className="w-full flex items-center justify-between py-1.5 px-5 rounded-lg font-medium 
                    text-white bg-gradient-to-r from-teal-400 to-ligth-green hover:from-ligth-green 
                    hover:to-teal-400 transition-all shadow-sm"
                >Editar
                    <PencilLine size={20} weight="light" />
                </button>
            </Link>
            <Link to={`/deletarpostagem/${postagem.id}`} className="flex-grow">
                <button
                    type="button"
                    className="w-full flex items-center justify-between py-1.5 px-5 rounded-lg font-medium text-white bg-gradient-to-r from-rose-500 to-red-600 hover:brightness-90 transition-all shadow-sm"
                >Deletar
                    <Trash size={20} weight="regular" />
                </button>
            </Link>
        </div>
    </div>
  )
}

export default CardPostagens
import { Link } from 'react-router-dom'
import type Tema from '../../../models/Tema'

interface CardTemasProps{
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-emerald text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-8 bg-emerald-50 text-3xl  h-full'>{tema.descricao}</p>
            
            <div className="flex">
                <Link to={`/editartema/${tema.id}`} 
                    className='w-full text-slate-100 bg-ligth-green
                           hover:bg-emerald 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas
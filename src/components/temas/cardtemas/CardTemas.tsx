import { Link } from "react-router-dom";
import type Tema from "../../../models/Tema";
import { Bookmarks, PencilLine, Trash } from "@phosphor-icons/react";

interface CardTemasProps {
  tema: Tema;
}

function CardTemas({ tema }: CardTemasProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
      <header className="flex items-center justify-between py-3 px-6 text-gray-500 font-bold text-2xl">
        Tema
        <Bookmarks size={32} weight="light" />
      </header>
        <hr className="border-slate-300 mx-4" />
      <div className="p-5 flex-1">
        <p className="text-xl text-gray-500">{tema.descricao || "Sem descrição"}</p>
      </div>

      <div className="flex gap-3 px-4 pb-4 pt-2">
        <Link to={`/editartema/${tema.id}`} className="flex-grow">
          <button
            type="button"
            className="w-full flex items-center justify-between py-1.5 px-5 rounded-lg font-medium text-white bg-gradient-to-r from-teal-400 to-ligth-green hover:from-ligth-green hover:to-teal-400 transition-all shadow-sm"
          >
            Editar
            <PencilLine size={20} weight="light" />
          </button>
        </Link>

        <Link to={`/deletartema/${tema.id}`} className="flex-grow">
          <button
            type="button"
            className="w-full flex items-center justify-between py-1.5 px-5 rounded-lg font-medium text-white bg-gradient-to-r from-rose-500 to-red-600 hover:brightness-90 transition-all shadow-sm"
          >
            Deletar
            <Trash size={20} weight="regular" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardTemas;

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react"
import type { ReactNode } from "react"
import type UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)
    const [mensagem, setMensagem] = useState<string | null>(null)
    const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | null>(null)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario)
            setMensagem("O Usuário foi autenticado com sucesso!")
            setTipoMensagem("sucesso")
        } catch (error) {
            setMensagem("Os Dados do usuário estão inconsistentes!")
            setTipoMensagem("erro")
        }
        setIsLoading(false)

         // Oculta automaticamente após 3 segundos
        setTimeout(() => {
        setMensagem(null)
        setTipoMensagem(null)
    }, 3000)
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {mensagem && tipoMensagem && (
                <div className="fixed top-4 right-4 z-50">
                    <div className={`
                    p-3 rounded shadow-lg max-w-md w-full text-sm border-l-4
                    ${tipoMensagem === "sucesso"
                        ? "bg-green-100 border-green-500 text-green-700"
                        : "bg-red-100 border-red-500 text-red-700"}
                    `}>
                    <p className="font-bold text-lg">
                        {tipoMensagem === "sucesso" ? "Sucesso" : "Erro"}
                    </p>
                    <p>{mensagem}</p>
                    </div>
                </div>
            )}
            {children}
        </AuthContext.Provider>
    )
}
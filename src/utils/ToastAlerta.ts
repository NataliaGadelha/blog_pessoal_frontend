import { Flip, toast } from "react-toastify";

export function ToastAlerta(mensagem: string, tipo: string) {
  
    switch(tipo) {
        case 'sucesso' :
            toast.success(mensagem, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
            });
            break;
        
        case 'erro' :
            toast.error(mensagem, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
            });
            break;

        case 'info' :
            toast.info(mensagem, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
            });
            break;
    }
}

export default ToastAlerta
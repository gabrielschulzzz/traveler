import { FiAlertCircle } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Container, Image } from "./styles";
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { border } from "polished";

export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const notify = () => toast.error("Preencha todos os campos!");

    const { signIn } = useContext(AuthContext)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        const data = {
            email, password
        }

        if (!email || !password) {
            notify()
        }


        await signIn(data)

    }


    return (
        <Container>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <Image>
                <img src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" alt="" />
            </Image>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <h1>Fazer login</h1>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="secondInput">
                        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <AiOutlineEye />
                    </div>
                    <Button>Acessar plataforma</Button>
                    <div className="alert">
                        <FiAlertCircle />
                        <p>Nao possui conta? <Link to="/register">Cadastre-se agora gratuitamente.</Link></p>
                    </div>
                </form>
            </div>
        </Container>
    )
}
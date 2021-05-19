import { FiAlertCircle } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Container, Image } from "./styles";
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const { signIn } = useContext(AuthContext)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        const data = {
            email, password
        }

        await signIn(data)
    }


    return (
        <Container>
            <Image>
                <img src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" alt="" />
            </Image>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <h1>Fazer login</h1>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="secondInput">
                        <input type="text" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <AiOutlineEye />
                    </div>
                    <Button>Acessar plataforma</Button>
                    <div className="alert">
                        <FiAlertCircle />
                        <p>Acesso restrito a socios e moderadores.</p>
                    </div>
                </form>
            </div>
        </Container>
    )
}
import { FiAlertCircle } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Container, Image } from "./styles";
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export function Login() {
    return (
        <Container>
            <Image>
                <img src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" alt="" />
            </Image>
            <div className="form">
                <div>
                    <h1>Fazer login</h1>
                    <input type="text" placeholder="Email" />
                    <div className="secondInput">
                        <input type="text" placeholder="Senha" />
                        <AiOutlineEye />
                    </div>
                    <Link to="/dashboard">
                        <Button>Acessar plataforma</Button>
                    </Link>
                    <div className="alert">
                        <FiAlertCircle />
                        <p>Acesso restrito a socios e moderadores.</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
import axios from 'axios'
import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Container, FormSuccess } from './styles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiAlertCircle } from 'react-icons/fi'
import { GoBackButton } from '../../components/GoBackButton'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [accountCreationSuccess, setAccountCreationSuccess] = useState(false);

    const notify = () => toast.error("Preencha todos os campos!");
    const notifypassword = () => toast.error("Senhas nao coincidem!");
    const notifyUserAlready = () => toast.error("Usuario com este e-mail ja cadastrado!")
    const notifyServerError = () => toast.error("Erro no servidor. Tente novamente.")

    async function handleRegister(e: FormEvent) {
        e.preventDefault()
        try {
            if (password !== password2) {
                notifypassword()
            }

            if (password === password2) {
                if (!name || !password || !password2 || !email) {
                    notify()
                    return;
                }

                const user = await axios.post("http://localhost:3333/users", {
                    name, email, password
                })

                if (user.status === 200) {
                    setAccountCreationSuccess(true)
                }
            } else {
                notifyServerError()
            }

        } catch (error) {
            if (error.response.data.message === "User already exists") {
                notifyUserAlready()
            }
        }
    }

    return (
        <Container>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {
                accountCreationSuccess
                    ?
                    <>
                        <FormSuccess>
                            <h1>Conta criada!</h1>
                            <AiOutlineCheckCircle />
                            <Link to="/login"><Button>Fazer login</Button></Link>
                        </FormSuccess>
                    </>
                    :
                    <div className="form">
                        <form onSubmit={handleRegister}>
                            <GoBackButton />
                            <h1>Criar conta</h1>
                            <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="password" placeholder="Confirmar senha" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                            <Button>Cadastrar</Button>
                            <div className="alert">
                                <FiAlertCircle />
                                <p>Ja possui conta? <Link to="/login">Faça login agora mesmo.</Link></p>
                            </div>
                        </form>
                    </div>
            }

            <div className="image">
                <img src="https://images.unsplash.com/photo-1528195135899-cf5d190bb3a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="" />
            </div>
        </Container>
    )
}
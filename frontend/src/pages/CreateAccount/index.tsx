import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container } from './styles'

export function CreateAccount() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [accountCreationSuccess, setAccountCreationSuccess] = useState(false);

    const handleRegister = async () => {
        try {
            if (password === password2) {
                const user = await axios.post("http://localhost:3333/users", {
                    name, email, password
                })

                if (user.status === 200) {
                    setAccountCreationSuccess(true)
                }
            } else {
                console.log("Passwords dont match")
            }

        } catch (error) {
            console.log(error.message)
        }


    }

    return (
        <Container>
            {
                accountCreationSuccess
                    ?
                    <>
                        <div className="form">
                            <h1>Conta criada!</h1>
                            <Link to="/login"><Button>Fazer login</Button></Link>
                        </div>
                    </>
                    :
                    <div className="form">
                        <h1>Criar conta</h1>
                        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" placeholder="Confirmar senha" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                        <Button onClick={handleRegister}>Cadastrar</Button>
                    </div>
            }

            <div className="image">
                <img src="https://images.unsplash.com/photo-1528195135899-cf5d190bb3a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="" />
            </div>
        </Container>
    )
}
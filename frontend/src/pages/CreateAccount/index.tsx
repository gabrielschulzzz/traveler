import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container } from './styles'

export function CreateAccount() {
    return (
        <Container>
            <div className="form">
                <h1>Criar conta</h1>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Senha" />
                <input type="text" placeholder="Confirmar senha" />
                <Button>Cadastrar</Button>
            </div>

            <div className="image">
                <img src="https://images.unsplash.com/photo-1528195135899-cf5d190bb3a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="" />
            </div>
        </Container>
    )
}
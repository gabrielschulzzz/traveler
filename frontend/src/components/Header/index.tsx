import { Button } from "../Button";
import { Logo } from "../Logo";
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Header() {
    const { user } = useContext(AuthContext)

    return (
        <>
            <Container>
                <Content>
                    <div>
                        <Logo />
                        {
                            user ? <Link to="/user/dashboard"><Button>Dashboard</Button></Link> : <Link to="/login"><Button>Acesso restrito</Button></Link>
                        }
                    </div>
                </Content>
            </Container>
        </>
    )
}
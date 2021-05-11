import { Button } from "../Button";
import { Logo } from "../Logo";
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

export function Header() {
    return (
        <>
            <Container>
                <Content>
                    <div>
                        <Logo />
                        <Link to="/login">
                            <Button>Acesso restrito</Button>
                        </Link>
                    </div>
                </Content>
            </Container>
        </>
    )
}
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Container, HeaderContent, PageContainer, CardsContainer, NotFoundContainer } from "./styles";
import { RiArrowDownSLine } from 'react-icons/ri'
import { Card } from "../../components/Card";
import { ImCrying } from 'react-icons/im'
import { Link } from 'react-router-dom';

export function CitiesList() {
    return (
        <>
            <Container>
                <HeaderContent>
                    <Logo />
                    <Input placeholder="Qual cidade voce procura?" />
                    <Button>Acesso restrito</Button>
                </HeaderContent>
            </Container>

            <PageContainer>
                <h1>Selecione uma cidade</h1>
                <ul>
                    <li>Todas</li>
                    <li>Mais acessadas</li>
                    <li>A-Z <RiArrowDownSLine /></li>
                </ul>
            </PageContainer>

            <CardsContainer>
                <Link to="/cities/dallas">
                    <Card
                        image="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        places="24"
                        title="Dallas"
                    />
                </Link>

                <Link to="/cities/dallas">
                    <Card
                        image="https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        places="16"
                        title="Ohio"
                    />
                </Link>

                <Link to="/cities/dallas">
                    <Card
                        image="https://images.unsplash.com/photo-1554058501-f6872d688003?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
                        places="37"
                        title="Shibuya"
                    />
                </Link>

                <Link to="/cities/dallas">
                    <Card
                        image="https://images.unsplash.com/photo-1620095200055-9d1c4f36ba43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        places="25"
                        title="Guadalajara"
                    />
                </Link>



            </CardsContainer>

            {/* <NotFoundContainer>
                <div>
                    <ImCrying />
                    <p>Sem resultados.</p>
                    <p>Tente uma nova busca</p>
                </div>
            </NotFoundContainer> */}
        </>
    )
}
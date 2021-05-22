import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header/'
import { Container, Hero, CardsRow } from './styles';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';

export function Home() {
    return (
        <>
            <Header />
            <Container>
                <Hero>
                    <h1>Viva uma grande aventura</h1>
                    <p>Descubra locais incriveis para visitar cidades maravilhosas ao redor do mundo.</p>
                    <Link to="/cities"><Button>Descobrir todos os lugares</Button></Link>
                </Hero>

                <CardsRow>
                    <Card
                        image="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        places="24"
                        title="Dallas"
                    />

                    <Card
                        image="https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        places="16"
                        title="Ohio"
                    />

                    <Card
                        image="https://images.unsplash.com/photo-1554058501-f6872d688003?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
                        places="37"
                        title="Shibuya"
                    />
                </CardsRow>

                <CardsRow className="second">
                    <Card
                        image="https://images.unsplash.com/photo-1584972074436-e3b2214fd679?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                        places="62"
                        title="Moscow"
                    />

                    <Card
                        image="https://images.unsplash.com/photo-1620095200055-9d1c4f36ba43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        places="48"
                        title="Guadalajara"
                    />

                    <Card
                        image="https://images.unsplash.com/photo-1568632182996-e445c07c7097?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                        places="116"
                        title="Athens"
                    />
                </CardsRow>
            </Container>
            <Footer />
        </>
    )
}
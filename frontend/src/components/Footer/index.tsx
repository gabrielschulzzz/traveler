import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { MdFlightTakeoff } from 'react-icons/md';
import { Container, Wrapper } from './styles';

export function Footer() {
    return (
        <Container>
            <Wrapper>
                <div>
                    <MdFlightTakeoff />
                    <h3>Traveler</h3>
                </div>
                <div>
                    <h4>Descubra</h4>
                    <p>Cidades</p>
                </div>
                <div>
                    <h4>Companhia</h4>
                    <p>Sobre nos</p>
                    <p>Cadastre sua empresa</p>
                    <p>Entre em contato</p>
                </div>
                <div>
                    <h4>Mais informacoes</h4>
                    <p>Termos e condicoes</p>
                    <p>Politica de privacidade</p>
                </div>
                <div>
                    <h4>Redes sociais</h4>
                    <div className="socials">
                        <AiFillFacebook />
                        <AiFillTwitterSquare />
                        <AiFillLinkedin />
                        <AiFillInstagram />
                    </div>
                </div>
            </Wrapper>
        </Container>
    )
}
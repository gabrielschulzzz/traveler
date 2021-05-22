import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

import { Container } from './styles';

export function GoBackButton() {
    return (
        <Link to="/">
            <Container>
                <div className="icon">
                    <AiOutlineArrowLeft />
                </div>
                <p>Voltar a home</p>
            </Container>
        </Link >
    )
}
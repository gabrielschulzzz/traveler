import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { Container, WhiteBackground, Wrapper } from './styles';

interface LogoWhiteBgProps {
    city: string;
}

export function LogoWhiteBg({ city }: LogoWhiteBgProps) {
    return (
        <Container>
            <WhiteBackground>
                <Wrapper>
                    <Logo />
                    <Link to={`/cities/${city}`}>
                        <div className="go-back">
                            <AiOutlineArrowLeft />
                        </div>
                    </Link>
                </Wrapper>
            </WhiteBackground>
        </Container>
    )
}
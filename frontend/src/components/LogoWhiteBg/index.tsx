import { Logo } from '../Logo';

import { Container, WhiteBackground, Wrapper } from './styles';

export function LogoWhiteBg() {
    return (
        <Container>
            <WhiteBackground>
                <Wrapper>
                    <Logo />
                </Wrapper>
            </WhiteBackground>
        </Container>
    )
}
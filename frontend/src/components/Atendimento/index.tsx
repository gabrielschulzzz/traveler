import { MiniCard } from '../MiniCard';
import { Container, CardList } from './styles';

interface AtendimentoProps {
    segunda: string;
    terca: string;
    quarta: string;
    quinta: string;
    sexta: string;
    sabado: string;
    domingo: string;
}

export function Atendimento({ domingo, quarta, quinta, sabado, segunda, sexta, terca }: AtendimentoProps) {
    return (
        <Container>
            <h2>Atendimento</h2>

            <CardList>
                <MiniCard>
                    <p className="light">Domingo</p>
                    <p className="strong">{domingo}</p>
                </MiniCard>

                <MiniCard>
                    <p className="light">Segunda</p>
                    <p className="strong">{segunda}</p>
                </MiniCard>

                <MiniCard>
                    <p className="light">Terca</p>
                    <p className="strong">{terca}</p>
                </MiniCard>

                <MiniCard>
                    <p className="light">Quarta</p>
                    <p className="strong">{quarta}</p>
                </MiniCard>

                <MiniCard>
                    <p className="light">Quinta</p>
                    <p className="strong">{quinta}</p>
                </MiniCard>

                <MiniCard>
                    <p className="light">Sexta</p>
                    <p className="strong">{sexta}</p>
                </MiniCard>

                <MiniCard>
                    <p className="light">Sabado</p>
                    <p className="strong">{sabado}</p>
                </MiniCard>
            </CardList>
        </Container>
    )
}
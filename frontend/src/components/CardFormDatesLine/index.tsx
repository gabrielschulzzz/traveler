import { Container } from './styles';

interface CardFormDatesLineProps {
    day: string;
}

export function CardFormDatesLine({ day }: CardFormDatesLineProps) {
    return (
        <Container>
            <div className="first">
                <h3>{day}</h3>
                <div className="open-closed">
                    <p className="box box-first">Aberto</p>
                    <p className="box">Fechado</p>
                </div>
            </div>

            <div className="second">
                <p>Das</p>
                <input type="text" />
                <p className="second-time">Ate</p>
                <input type="text" />
            </div>
        </Container>
    )
}
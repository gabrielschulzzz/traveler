import { CardFormDatesLine } from '../CardFormDatesLine';
import { Container } from './styles';

export function CardFormDates() {
    return (
        <Container>
            <h3 className="title">Atendimento</h3>

            <CardFormDatesLine day="Domingo" />
            <CardFormDatesLine day="Segunda" />
            <CardFormDatesLine day="Terca" />
            <CardFormDatesLine day="Quarta" />
            <CardFormDatesLine day="Quinta" />
            <CardFormDatesLine day="Sexta" />
            <CardFormDatesLine day="Sabado" />
        </Container>
    )
}
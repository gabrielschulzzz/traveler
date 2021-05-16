import { MiniCard } from '../MiniCard';
import { Container, CardList } from './styles';

interface AtendimentoProps {
    segundaOpen: boolean;
    segundaOpenFrom: string;
    segundaOpenUntil: string;

    tercaOpen: boolean;
    tercaOpenFrom: string;
    tercaOpenUntil: string;

    quartaOpen: boolean;
    quartaOpenFrom: string;
    quartaOpenUntil: string;

    quintaOpen: boolean;
    quintaOpenFrom: string;
    quintaOpenUntil: string;

    sextaOpen: boolean;
    sextaOpenFrom: string;
    sextaOpenUntil: string;

    sabadoOpen: boolean;
    sabadoOpenFrom: string;
    sabadoOpenUntil: string;

    domingoOpen: boolean;
    domingoOpenFrom: string;
    domingoOpenUntil: string;
}

export function Atendimento({ domingoOpen, quartaOpen, quintaOpen, sabadoOpen, segundaOpen, sextaOpen, tercaOpen, domingoOpenFrom, domingoOpenUntil, quartaOpenFrom, quartaOpenUntil, quintaOpenFrom, quintaOpenUntil, sabadoOpenFrom, sabadoOpenUntil, segundaOpenFrom, segundaOpenUntil, sextaOpenFrom, sextaOpenUntil, tercaOpenFrom, tercaOpenUntil }: AtendimentoProps) {
    return (
        <Container>
            <h2>Atendimento</h2>

            <CardList>
                <MiniCard>
                    <p className="light">Domingo</p>
                    {
                        domingoOpen
                            ? <p className="strong">{domingoOpenFrom} - {domingoOpenUntil}</p>
                            : <p className="strong">Fechado</p>
                    }
                </MiniCard>

                <MiniCard>
                    <p className="light">Segunda</p>
                    {
                        segundaOpen
                            ? <p className="strong">{segundaOpenFrom} - {segundaOpenUntil}</p>
                            : <p className="strong">Fechado</p>
                    }
                </MiniCard>

                <MiniCard>
                    <p className="light">Terca</p>
                    {
                        tercaOpen
                            ? <p className="strong">{tercaOpenFrom} - {tercaOpenUntil}</p>
                            : <p className="strong">Fechado</p>
                    }
                </MiniCard>

                <MiniCard>
                    <p className="light">Quarta</p>
                    {
                        quartaOpen
                            ? <p className="strong">{quartaOpenFrom} - {quartaOpenUntil}</p>
                            : <p className="strong">Fechado</p>
                    }
                </MiniCard>

                <MiniCard>
                    <p className="light">Quinta</p>
                    {
                        quintaOpen
                            ? <p className="strong">{quintaOpenFrom} - {quintaOpenUntil}</p>
                            : <p className="strong">Fechado</p>
                    }
                </MiniCard>

                <MiniCard>
                    <p className="light">Sexta</p>
                    {
                        sextaOpen
                            ? <p className="strong">{sextaOpenFrom} - {sextaOpenUntil}</p>
                            : <p className="strong">Fechado</p>
                    }
                </MiniCard>

                <MiniCard>
                    <p className="light">Sabado</p>
                    {
                        sabadoOpen
                            ? <p className="strong">{sabadoOpenFrom} - {sabadoOpenUntil}</p>
                            : <p className="strong">Fechado</p>
                    }
                </MiniCard>
            </CardList>
        </Container>
    )
}
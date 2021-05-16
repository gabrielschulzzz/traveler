import { CardFormDatesLine } from '../CardFormDatesLine';
import { Container } from './styles';

interface CardFormDatesProps {
    domingoOpen?: boolean;
    segundaOpen?: boolean;
    tercaOpen?: boolean;
    quartaOpen?: boolean;
    quintaOpen?: boolean;
    sextaOpen?: boolean;
    sabadoOpen?: boolean;
    setDomingoOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSegundaOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setTercaOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setQuartaOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setQuintaOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSextaOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSabadoOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CardFormDates({ domingoOpen, segundaOpen, tercaOpen, quartaOpen, quintaOpen, sextaOpen, sabadoOpen, setDomingoOpen, setSegundaOpen, setTercaOpen, setQuartaOpen, setQuintaOpen, setSextaOpen, setSabadoOpen }: CardFormDatesProps) {
    return (
        <Container>
            <h3 className="title">Atendimento</h3>
            <CardFormDatesLine day="Domingo" isOpen={domingoOpen} handleOpen={setDomingoOpen} />
            <CardFormDatesLine day="Segunda" isOpen={segundaOpen} handleOpen={setSegundaOpen} />
            <CardFormDatesLine day="Terca" isOpen={tercaOpen} handleOpen={setTercaOpen} />
            <CardFormDatesLine day="Quarta" isOpen={quartaOpen} handleOpen={setQuartaOpen} />
            <CardFormDatesLine day="Quinta" isOpen={quintaOpen} handleOpen={setQuintaOpen} />
            <CardFormDatesLine day="Sexta" isOpen={sextaOpen} handleOpen={setSextaOpen} />
            <CardFormDatesLine day="Sabado" isOpen={sabadoOpen} handleOpen={setSabadoOpen} />
        </Container>
    )
}
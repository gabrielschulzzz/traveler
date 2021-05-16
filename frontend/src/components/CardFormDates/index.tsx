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

    domingoFrom: string;
    domingoUntil: string;
    setDomingoFrom: React.Dispatch<React.SetStateAction<string>>;
    setDomingoUntil: React.Dispatch<React.SetStateAction<string>>;

    segundaFrom: string;
    segundaUntil: string;
    setSegundaFrom: React.Dispatch<React.SetStateAction<string>>;
    setSegundaUntil: React.Dispatch<React.SetStateAction<string>>;

    tercaFrom: string;
    tercaUntil: string;
    setTercaFrom: React.Dispatch<React.SetStateAction<string>>;
    setTercaUntil: React.Dispatch<React.SetStateAction<string>>;

    quartaFrom: string;
    quartaUntil: string;
    setQuartaFrom: React.Dispatch<React.SetStateAction<string>>;
    setQuartaUntil: React.Dispatch<React.SetStateAction<string>>;

    quintaFrom: string;
    quintaUntil: string;
    setQuintaFrom: React.Dispatch<React.SetStateAction<string>>;
    setQuintaUntil: React.Dispatch<React.SetStateAction<string>>;

    sextaFrom: string;
    sextaUntil: string;
    setSextaFrom: React.Dispatch<React.SetStateAction<string>>;
    setSextaUntil: React.Dispatch<React.SetStateAction<string>>;

    sabadoFrom: string;
    sabadoUntil: string;
    setSabadoFrom: React.Dispatch<React.SetStateAction<string>>;
    setSabadoUntil: React.Dispatch<React.SetStateAction<string>>;
}

export function CardFormDates({ domingoOpen, segundaOpen, tercaOpen, quartaOpen, quintaOpen, sextaOpen, sabadoOpen, setDomingoOpen, setSegundaOpen, setTercaOpen, setQuartaOpen, setQuintaOpen, setSextaOpen, setSabadoOpen, domingoFrom, domingoUntil, setDomingoFrom, setDomingoUntil, segundaFrom, segundaUntil, setSegundaFrom, setSegundaUntil, tercaFrom, tercaUntil, setTercaFrom, setTercaUntil, quartaFrom, quartaUntil, setQuartaFrom, setQuartaUntil, quintaFrom, quintaUntil, setQuintaFrom, setQuintaUntil, sextaFrom, sextaUntil, setSextaFrom, setSextaUntil, sabadoFrom, sabadoUntil, setSabadoFrom, setSabadoUntil }: CardFormDatesProps) {
    return (
        <Container>
            <h3 className="title">Atendimento</h3>
            <CardFormDatesLine
                day="Domingo"
                isOpen={domingoOpen}
                handleOpen={setDomingoOpen}
                das={domingoFrom}
                setDas={setDomingoFrom}
                ate={domingoUntil}
                setAte={setDomingoUntil}
            />
            <CardFormDatesLine
                day="Segunda"
                isOpen={segundaOpen}
                handleOpen={setSegundaOpen}
                das={segundaFrom}
                setDas={setSegundaFrom}
                ate={segundaUntil}
                setAte={setSegundaUntil}
            />
            <CardFormDatesLine
                day="Terca"
                isOpen={tercaOpen}
                handleOpen={setTercaOpen}
                das={tercaFrom}
                setDas={setTercaFrom}
                ate={tercaUntil}
                setAte={setTercaUntil}
            />
            <CardFormDatesLine
                day="Quarta"
                isOpen={quartaOpen}
                handleOpen={setQuartaOpen}
                das={quartaFrom}
                setDas={setQuartaFrom}
                ate={quartaUntil}
                setAte={setQuartaUntil}
            />
            <CardFormDatesLine
                day="Quinta"
                isOpen={quintaOpen}
                handleOpen={setQuintaOpen}
                das={quintaFrom}
                setDas={setQuintaFrom}
                ate={quintaUntil}
                setAte={setQuintaUntil}
            />
            <CardFormDatesLine
                day="Sexta"
                isOpen={sextaOpen}
                handleOpen={setSextaOpen}
                das={sextaFrom}
                setDas={setSextaFrom}
                ate={sextaUntil}
                setAte={setSextaUntil}
            />
            <CardFormDatesLine
                day="Sabado"
                isOpen={sabadoOpen}
                handleOpen={setSabadoOpen}
                das={sabadoFrom}
                setDas={setSabadoFrom}
                ate={sabadoUntil}
                setAte={setSabadoUntil}
            />
        </Container>
    )
}
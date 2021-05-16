import { Container } from './styles';

interface CardFormDatesLineProps {
    day: string;
    isOpen?: boolean;
    handleOpen: React.Dispatch<React.SetStateAction<boolean>>;
    das?: string;
    ate?: string;
    setDas: React.Dispatch<React.SetStateAction<string>>;
    setAte: React.Dispatch<React.SetStateAction<string>>;
}

export function CardFormDatesLine({ day, isOpen, handleOpen, das, ate, setDas, setAte }: CardFormDatesLineProps) {
    return (
        <Container isOpen={isOpen}>
            <div className="first">
                <h3>{day}</h3>
                <div className="open-closed">
                    <p onClick={() => handleOpen(true)} className="box box-first">Aberto</p>
                    <p onClick={() => handleOpen(false)} className="box box-second">Fechado</p>
                </div>
            </div>

            {
                isOpen ?
                    <div className="second">
                        <p>Das</p>
                        <input type="text" value={das} onChange={(e) => setDas(e.target.value)} />
                        <p className="second-time">Ate</p>
                        <input type="text" value={ate} onChange={(e) => setAte(e.target.value)} />
                    </div>
                    : ''
            }
        </Container>
    )
}
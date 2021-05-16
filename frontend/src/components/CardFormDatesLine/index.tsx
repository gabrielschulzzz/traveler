import { Container } from './styles';

interface CardFormDatesLineProps {
    day: string;
    isOpen?: boolean;
    handleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CardFormDatesLine({ day, isOpen, handleOpen }: CardFormDatesLineProps) {
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
                        <input type="text" />
                        <p className="second-time">Ate</p>
                        <input type="text" />
                    </div>
                    : ''
            }
        </Container>
    )
}
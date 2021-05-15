import { Container } from './styles';

interface CardFormAddressProps {
    map?: boolean,
    cep?: string;
    street?: string;
    district?: string;
    number?: string;
    setCep: React.Dispatch<React.SetStateAction<string>>;
    setStreet: React.Dispatch<React.SetStateAction<string>>;
    setDistrict: React.Dispatch<React.SetStateAction<string>>;
    setNumber: React.Dispatch<React.SetStateAction<string>>;
}

export function CardFormAddress({ map, cep, street, district, number, setCep, setStreet, setDistrict, setNumber }: CardFormAddressProps) {
    return (
        <Container>
            <h3 className="heading">Endereco</h3>

            <div className="split-30-70">
                <label className="first-label">Cep</label>
                <label className="second-label">Rua</label>
            </div>
            <div className="split-30-70">
                <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
                <input className="second-input" type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
            </div>

            <div className="split-70-30">
                <label className="first-label">Bairro</label>
                <label className="second-label">Numero</label>
            </div>

            <div className="split-70-30">
                <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} />
                <input type="text" className="second-input" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>

            {
                map ? <div className="form-foto map">
                </div> : null
            }

        </Container>
    )
}
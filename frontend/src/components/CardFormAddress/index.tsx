import { Container } from './styles';

interface CardFormAddressProps {
    map?: boolean
}

export function CardFormAddress({ map }: CardFormAddressProps) {
    return (
        <Container>
            <h3 className="heading">Endereco</h3>

            <div className="split-30-70">
                <label className="first-label">Cep</label>
                <label className="second-label">Rua</label>
            </div>
            <div className="split-30-70">
                <input type="text" />
                <input className="second-input" type="text" />
            </div>

            <div className="split-70-30">
                <label className="first-label">Bairro</label>
                <label className="second-label">Numero</label>
            </div>

            <div className="split-70-30">
                <input type="text" />
                <input type="text" className="second-input" />
            </div>

            {
                map ? <div className="form-foto map">
                </div> : null
            }

        </Container>
    )
}
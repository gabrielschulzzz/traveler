import { Container } from './styles';

interface EnderecoProps {
    rua: string;
    cep: string;
}

export function Endereco({ cep, rua }: EnderecoProps) {
    return (
        <Container>
            <div className="header">
                <h2>Endereco</h2>
                <p>Ver no Google Maps</p>
            </div>

            <img src="https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2020/09/24/maps.JPG" alt="Endereco" />

            <p className="rua">Rua {rua}</p>
            <p>{cep}</p>
        </Container>
    )
}
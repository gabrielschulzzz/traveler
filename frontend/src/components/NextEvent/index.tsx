import { Container } from "./styles";

export function NextEvent() {
    return (
        <Container>
            <h3 className="heading">Proximo acontecimento</h3>
            <label>De</label>
            <select>
                <option value="saab">1</option>
                <option value="fiat">2</option>
            </select>

            <label>Ate</label>
            <select>
                <option value="saab">1</option>
                <option value="fiat">2</option>
            </select>

            <label>Ano</label>
            <select>
                <option value="saab">1</option>
                <option value="fiat">2</option>
            </select>
        </Container>
    )
}
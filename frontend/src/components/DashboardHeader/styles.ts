import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`

export const Wrapper = styled.div`
    width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text);

`

interface Step1Props {
    active: number;
}

export const Step1 = styled.p<Step1Props>`
    cursor: pointer;
    font-weight: ${(props) => props.active === 1 ? "bold" : "400"};
    font-size: ${(props) => props.active === 1 ? "1.5rem" : "1rem"}
`

export const Step2 = styled.p<Step1Props>`
    cursor: pointer;
    font-weight: ${(props) => props.active === 2 ? "bold" : "400"};
    font-size: ${(props) => props.active === 2 ? "1.5rem" : "1rem"}
`

export const WhiteBackground = styled.div`
    flex: 1;
    height: 5.938rem;
    background: var(--white);
    display: flex;
    align-items: center;

`
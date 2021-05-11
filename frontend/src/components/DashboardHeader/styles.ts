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

    .step1, 
    .step2 {
        cursor: pointer;
    }
`

export const WhiteBackground = styled.div`
    flex: 1;
    height: 5.938rem;
    background: var(--white);
    display: flex;
    align-items: center;

`
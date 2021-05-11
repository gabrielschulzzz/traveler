import styled from 'styled-components';

export const Container = styled.div`
    h2 {
        color: var(--title);
        display: inline;
    }
`

export const CardList = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 35%;

    div {
        margin: .5rem .5rem;
    }
`
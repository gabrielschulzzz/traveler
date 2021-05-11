import styled from 'styled-components'

export const InputElement = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--background);
    color: var(--complement);
    border: 1px solid var(--light-grey);
    border-radius: 0.625rem;

    svg {
        font-size: 1.5rem;
        margin-left: 1rem;
    }

    input {
        border: none;
        font-size: 1rem;
        background-color: var(--background);
        outline: none;
        padding: 1rem;
        width: 26rem;
        border-radius: 0.625rem;
    }
`

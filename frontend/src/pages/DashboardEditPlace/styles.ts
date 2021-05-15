import styled from 'styled-components';

export const Container = styled.div``

export const DeleteButton = styled.div`
    display: flex;
    
    button {
        font-weight: bold;
        border: 0;
        padding: .8rem 1rem;
        display: flex;
        align-items: center;
        font-size: .9rem;
        color: var(--white);
        background-color: var(--red);
        border-radius: 0.625rem;

        svg { 
            font-size: 1.2rem;
            margin-right: .5rem;
        }
    }
`
import styled from 'styled-components';

export const Container = styled.main`
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
`

export const Hero = styled.div`
    width: 50%;

    h1 {
        width: 70%;
        font-size: 5rem;
        color: var(--title);
        margin-top: 10rem;
        line-height: 5rem;
    }

    p {
        margin-top: 1.7rem;
        width: 50%;
        font-size: 1.4rem;
        line-height: 2rem;
        color: var(--text);
    }

    button {
        a {
            text-decoration: none;
            color: var(--white);
        }
        
        background: var(--orange);
        color: var(--white);
        margin-top: 4rem;
        padding: 1.2rem 4rem;
        font-size: 1.2rem;
    }
`

export const CardsRow = styled.div` 
    width: 30%;
    
    > div { 
        margin: 1rem 1rem;
        padding: 0;
    }

    &.second {
        margin-top: 8rem;
    }
`

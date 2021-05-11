import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 1rem;
    
    h3 {
        color: var(--text);
    }
`

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    margin: 1rem 0;
`

export const RadioBox = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 0;
    background-color: transparent;
    border: 1px solid var(--light-grey);
    width: 13.313rem;
    padding: 2rem;
    height: 12.75rem;
    border-radius: 0.625rem;
    background-color: var(--background);

    svg {
        font-size: 3rem;
        color: var(--orange);
    }

    h3 {
        color: var(--title);
        font-size: 1.5rem;
    }
`
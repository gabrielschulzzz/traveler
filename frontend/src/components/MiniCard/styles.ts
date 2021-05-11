import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--white);
    width: 6.5rem;
    height: 5.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--light-grey);

    .strong {
        margin-top: .5rem;
        font-weight: 600;
    }

    .light {
        color: var(--text);
    }
`
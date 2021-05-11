import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 33%;

        h2 {
            color: var(--title);
        }

        p {
            color: var(--text);
            font-size: .9rem;
        }
    }

    img {
        margin: 2rem 0;
        height: 17rem;
    }

    .rua, p {
        color: var(--text);
        margin-bottom: .4rem;
    }
`
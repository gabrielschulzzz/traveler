import styled from 'styled-components';

export const CardBottom = styled.div`
    display: flex;
    padding: 1rem 2rem;
    margin-bottom: .8rem;

    .first {
        img {
            width: 5rem;
            height: 5rem;
            object-fit: cover;
            border-radius: 100%;
        }
    }

    .second {
        margin-left: 1rem;

        h3 {
            font-size: 1.25rem;
            margin-bottom: .5rem;
            color: var(--text);
        }

        p {
            color: var(--text);
        }

        svg {
            margin-top: .5rem;
            font-size: 1.4rem;
            color: var(--orange);
        }
    }
`
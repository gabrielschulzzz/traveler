import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid ${lighten('0.1', '#A0ACB2')};
    background-color: ${lighten('0.1', '#A0ACB2')};
    margin-top: 10rem;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 4.5rem auto;

    svg {
        color: var(--orange);
        font-size: 2rem;
    }

    h3 {
        font-size: 3rem;
        color: var(--title);
    }

    h4 {
        font-size: 1.2rem;
        color: var(--title);
        margin-bottom: 1.5rem;
    }

    p {
        margin-top: .8rem;
        font-size: .9rem;
        color: var(--text);
    }

    .socials {
        margin-top: 1rem;
        svg {
            color: var(--blue-low);
            margin: .3rem;
            cursor: pointer;
            transition: color .2s;
            :hover {
                color: var(--orange)
            }
        }
    }


`
import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`

`

export const CardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.6rem;
    border-bottom: 1px solid var(--light-grey);

    .first, 
    .second {
        display: flex;
        align-items: center;
        color: var(--title);
        font-family: Barlow, serif;
    }

    .first {
        h3 {
            color: var(--blue);
            font-size: 1.5rem;
            line-height: 3rem;
        }
    }

    .second {
        .close {
            border: none;
            background: transparent;
        }

        svg {
            font-size: 1.5rem;
            color: var(--text)
        }
    }
`

export const CardBody = styled.div`

    padding: 1rem 5rem;

    .place-card {
        border: 1px solid var(--light-grey);
        border-radius: 0.625rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--white);
        transition: background-color 0.2s;
        height: 8rem;
        margin: 1.2rem 0;
        cursor: pointer;

        :hover {
            background-color: var(--blue-low);
        }


        h1 {
            color: var(--title);
        }

        img {
            width: 10rem;
            border-radius: 0.625rem;
        }
    }
`
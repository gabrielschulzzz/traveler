import styled from 'styled-components';

export const ModalTop = styled.div`
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
            margin-right: 2rem;
            color: var(--orange);
            line-height: 3rem;
        }

        svg {
            margin-right: .8rem;
        }
    }

    .second {
        .add {
            margin-right: 1.5rem;
            font-family: 'Heebo', sans-serif;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
        }


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
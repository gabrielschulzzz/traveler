import styled from 'styled-components';

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
export const CardBottom = styled.div`
    padding: 2rem;

    textarea {
        font-family: Roboto;
        font-size: .9rem;
        padding: 1rem;
        width: 100%;
        height: 8.5rem;
        border-radius: 0.625rem;
        border: 1px solid var(--light-grey);
        resize: none;
        color: var(--text);
    }

    .score {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            color: var(--orange);
            font-weight: bold;
        }

        .star-container {
            display: flex;
            background-color: var(--white);
            border-top: 1px solid var(--light-grey);
            border-right: 1px solid var(--light-grey);
            border-bottom: 1px solid var(--light-grey);
        }

        .star {
            border-left: 1px solid var(--light-grey);
            padding: .5rem 2.5rem;
        }

        svg {
            color: var(--text);
            font-size: 1.5rem;
        }
    }

    .send {
        margin-top: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .alert {
            display: flex;
            align-items: center;

            p {
                width: 55%;
                color: var(--text);
                line-height: 1.4rem;
            }

            svg {
                color: var(--orange);
                font-size: 2rem;
                margin-right: 1rem;
            }
        }

        button {
            background: var(--green);
            color: var(--white);
        }
    }
`

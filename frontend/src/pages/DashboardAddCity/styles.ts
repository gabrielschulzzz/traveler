import styled from 'styled-components';

export const Container = styled.div`
    .title {
        font-family: Barlow, serif;
        color: var(--complement);
    }

    .right {
        display: flex;
        p {
            margin: 0 .5rem;
        }
    }
`

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
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

export const SuccessAdd = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    .first {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;

        svg {
            font-size: 3rem;
            color: var(--green);
            margin-bottom: 1rem;
        }

        h1 {
            color: var(--title);
            text-align: center;
            font-size: 3.5rem;
            width: 30%;
        }

        p {
            text-align: center;
            margin: 1.7rem 0;
            color: var(--text);
            line-height: 1.7rem;
            width: 50%;
        }

        button {
            font-size: 1rem;
            margin-top: 1.8rem;
            color: var(--white);
            background-color: var(--orange);
            padding: 1.2rem 2rem;
            display: flex;
            align-items: center;
        }
    }

    .second {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
`
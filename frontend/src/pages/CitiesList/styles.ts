import styled from 'styled-components';

export const Container = styled.div`
    height: 6rem;
    background-color: var(--white);
    display: flex;
    border-bottom: 1px solid var(--light-grey);
`

export const HeaderContent = styled.div`
    width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const PageContainer = styled.main`
    width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    h1 {
        color: var(--title);
        font-size: 2.25rem;
    }

    ul {
        font-family: Roboto;
        display: flex;
        color: var(--complement);
        border-bottom: 1px solid var(--light-grey);
        
        li:first-child {
            font-weight: bold;
            color: var(--title);
        }

        li {
            list-style: none;
            margin: 1rem;
            display: flex;
            align-items: center;

            svg {
                color: var(--orange);
                margin-left: .4rem;
            }
        }
    }

`

export const CardsContainer = styled.div`
    margin: 2rem auto 5rem;
    max-width: 1400px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;

    > div {
        img {
            height: 65%;
        }

        margin: 1rem 1rem 1rem 0rem;
        
    }
`

export const NotFoundContainer = styled.div`
    margin: 0 auto;
    max-width: 1400px;
    height: 800px;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
            font-size: 4rem;
            margin-bottom: 2rem;
            color: var(--blue);
        }

        p {
            font-size: 2rem;
            font-weight: 500;
            color: var(--text);
            line-height: 2.125rem;
        }
    }
`
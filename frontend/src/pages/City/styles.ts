import styled from 'styled-components';

export const Container = styled.main`
    height: 6rem;
    background: var(--white);
    display: flex;
`

export const HeaderContent = styled.div`
    width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        color: var(--text);
        font-size: 1.25rem;
    }

`
export const HeroDescription = styled.div`
    max-width: 1400px;
    margin: 4rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;


    .left {
        flex: 1;

        h1 {
            color: var(--title);
            margin-bottom: 2rem;
            font-size: 3rem;
        }

        p.subtitle {
            line-height: 1.8rem;
            width: 70%;
            color: var(--title);
        }

        p.complement {
            margin-top: 1.5rem;
            color: var(--text);
            width: 70%;
        }
   }

    .right {
        flex: 1;
        display: flex;

        > div {
            display: flex;
            flex-direction: column;
            align-items: left;
            justify-content: space-around;
            padding: 1rem;
            height: 11.75rem;
            width: 10rem;
            background-color: var(--white);
            border-radius: 0.625rem;
            border: 1px solid var(--light-grey);
            margin: 1rem;

            svg {
                font-size: 2rem;
                color: var(--orange);
            }

            > div {
                width: 100%;

                h3 {
                    font-size: 2rem;
                    color: var(--title);
                }

                p {
                    color: var(--text);
                }
            }
        }
    }
`

export const CardHeader = styled.h3`
    margin: 8rem auto 1rem;
    max-width: 1400px;
    color: var(--title);
    font-size: 1.8rem;
`

export const AllHeader = styled.div`
    margin: 2rem auto;
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
        font-size: 1.8rem;
        color: var(--title);
    }

    ul {
        display: flex;
        border-bottom: 1px solid var(--light-grey);

        li {
            margin-bottom: 1rem;
            margin-left: 2rem;
            list-style: none;
        }
    }


`
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--light-grey);
    background-color: var(--white);
    border-radius: .625rem;
    padding: 2rem;
    width: 40rem;
    position: relative;
    transition: box-shadow .2s;

    :hover {
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.12);
    }

    h2, 
    h3 {
        color: var(--title);
    }


    .user {
        display: flex;
        flex-direction: column;
        flex: 2;

        .user-info {
            p {
                color: var(--text);
                font-size: .9rem;
            }
        }

        .review-info {
            margin-top: 1rem;
            > p {
                margin-top: .9rem;
                color: var(--text);
            }

            svg {
                margin-top: 1rem;
                color: var(--orange);
            }
        }

        p {
            margin: .4rem 0;
        }

        img {
            width: 10rem;
            border-radius: .625rem;
        }
    }

    .place {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
            margin-bottom: 2rem;
        }

        p {
            color: var(--text);
            margin-bottom: 2rem;
        }

        img {
            width: 15rem;
            border-radius: .625rem;
        }

        .icon-delete {
            padding: 1rem;
            svg {
                color: var(--orange);
                font-size: 1.2rem;
                cursor: pointer;
            }
            position: absolute;
            right: 0;
            top: 0;
        }
    }
`
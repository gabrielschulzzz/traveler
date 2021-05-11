import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    .form {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
            font-family: Barlow, serif;
            color: var(--title);
            font-size: 2.25rem;
            margin-bottom: 2rem;
        }

        input {
            font-size: 1rem;
            height: 4.5rem;
            background: var(--white);
            border: 1px solid var(--light-grey);
            border-radius: 10px;
            padding: 1rem 1rem;
            width: 26rem;
            outline: none;
            color: var(--complement);

            .firstInput {
                margin-bottom: 1rem;
            }
        }

        .secondInput {
            margin-top: .5rem;
            display: flex;
            align-items: center;
            border: 1px solid var(--light-grey);
            width: 26rem;
            background: var(--white);
            border-radius: 10px;

            svg {
                font-size: 1.4rem;
                margin-right: 1rem;
                color: var(--complement);
            }

            input {
                border: 0;
            }
        }

        button {
            background-color: var(--orange);
            color: var(--white);
            margin-top: 1.5rem;
            height: 4rem;
            width: 26rem;
            font-size: 1rem;
        }

        .alert {
            margin-top: 2rem;
            display: flex;
            align-items: center;
            color: var(--text);

            p {
                margin-left: .8rem;
                font-family: 'Heebo', sans-serif;
                font-size: 0.813rem;
            }

            svg {
                color: var(--orange);
                font-size: 1.4rem;
            }
        }
    }
`

export const Image = styled.div`
        width: 50%;
        height: 100vh;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 0;
    }
`
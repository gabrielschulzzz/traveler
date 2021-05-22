import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    .image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
    .form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100vw;
        height: 100vh;

            form {
                display: flex;
                flex-direction: column;

                h1 {
                    font-family: Barlow, serif;
                    color: var(--title);
                    font-size: 2.25rem;
                    margin-bottom: 2rem;
                }

                > input {
                margin-top: .5rem;
                font-size: 1rem;
                height: 4.5rem;
                background: var(--white);
                border: 1px solid var(--light-grey);
                border-radius: 10px;
                padding: 1rem 1rem;
                width: 26rem;
                outline: none;
                color: var(--complement);
            }   

            button {
                background-color: var(--green);
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
    }
`

export const FormSuccess = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100vw;
        height: 100vh;

        h1 {
            color: var(--title);
            font-size: 2.5rem;
           
        }

        svg {
            margin: 4rem;
            color: var(--green);
            font-size: 5rem;
        }

        button {
            background-color: var(--orange);
            color: var(--white);
            margin-top: 1.5rem;
            height: 4rem;
            width: 26rem;
            font-size: 1rem;
        }
`
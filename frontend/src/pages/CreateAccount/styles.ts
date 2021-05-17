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
        h1 {
            margin-bottom: 1rem;
            font-size: 3rem;
        }
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100vw;
        height: 100vh;

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
            background-color: var(--orange);
            color: var(--white);
            margin-top: 1.5rem;
            height: 4rem;
            width: 26rem;
            font-size: 1rem;
        }
    }
`
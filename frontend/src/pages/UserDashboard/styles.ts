import styled from 'styled-components';

export const Container = styled.div`
    height: 6rem;
    background: var(--white);
    display: flex;
`

export const DashboardBody = styled.div`
    max-width: 1400px;
    margin: 1rem auto;

    h1 {
        color: var(--title);
        margin: 1rem 0;
    }

    h3 {
        margin: 1rem 0;
        color: var(--text);
        font-size: 1.2rem;
    }

    h2 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 2rem;
    }

`

export const ReviewCard = styled.div`
    display: flex;
    background-color: var(--white);
    border-radius: 0.625rem;
    height: 10rem;
    width: 27.5rem;
    border: 1px solid var(--light-grey);
    position: relative;

    .image {
        img {
            height: 100%;
            width: 10rem;
            object-fit: cover;
            border-top-left-radius: 0.625rem;
            border-bottom-left-radius: 0.625rem;
        }
    }

    .content {
        width: 50%;
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
        margin-top: 1rem;

        p {
            margin: .5rem;
        }

        svg {
            position: absolute;
            font-size: 1.5rem;
            right: 1rem;
            bottom: 1rem;
            color: var(--red);
            cursor: pointer;
        }
    }
`

export const Profile = styled.div`
    display: flex;
    background-color: var(--white);
    width: 27.5rem;
    border-radius: 0.625rem;
    height: 20rem;
    border: 1px solid var(--light-grey);
    position: relative;

    .image {
        img {
            height: 100%;
            width: 10rem;
            object-fit: cover;
            border-top-left-radius: 0.625rem;
            border-bottom-left-radius: 0.625rem;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
        margin-top: 1rem;
        p {
            margin-top: 1rem;
        }

        svg {
            position: absolute;
            font-size: 1.5rem;
            right: 1rem;
            bottom: 1rem;
            color: var(--orange);
            cursor: pointer;
        }
    }
`

export const ReviewCardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
`
import styled from 'styled-components';

export const CardElement = styled.div`
    background: #fff;
    border-radius: .5rem;
    display: inline-block;
    border-top-right-radius: 0.951rem;
    border-top-left-radius: 0.951rem;
    position: relative;
    transition: box-shadow .2s;
    border: 1px solid var(--light-grey);
    position: relative;
    height: 23rem;

    .iconEdit {
        position: absolute;
        top: .8rem;
        right: 0rem;
        color: var(--white);
        padding: 0;
        padding: .5rem;
        background: var(--light-grey);
        border-top-left-radius: 0.625rem;
        border-bottom-left-radius: 0.625rem;

        
        svg {
            color: var(--blue);
            font-size: 1rem;
        }
    }

    :hover {
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.12);
    }

    img {
        width: 100%;
        height: 65%;
        object-fit: cover;
        border-top-right-radius: 0.951rem;
        border-top-left-radius: 0.951rem;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem;

        h2 {
            color: var(--blue);
            margin-bottom: 1rem;
            text-transform: capitalize;
        }

        p {
            color: var(--text);
        }
    }

    .rating {
        display: flex;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: -.7rem;
        left: 1rem;
        background: var(--orange);
        color: var(--white);
        margin: 0;
        padding: .5rem;
        width: 2.4rem;
        height: 4rem;
        border-radius: 0.625rem;

        p {
            margin-top: .2rem;
            color: var(--white);
            font-weight: 600;
        }
    }

    .card-bottom {
        margin: 0;
        padding: 0;
        width: 100%;
        display: grid;
        grid-template-columns: 11fr 1fr;
        position: relative;

        svg {
            color: var(--orange);
            font-size: 2rem;
            position: absolute;
            right: -1.075rem;   
        }
    }
`
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1400px;
    height: 19.875rem;
    background: var(--white);
    margin-bottom: 6rem;
    border-radius: 1rem;
    border: 1px solid var(--light-grey);
    position: relative;
    transition: box-shadow .2s;

    :hover {
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.12);
    }


    div { 
        width: 50%;
    }

    .card-text {
        padding: 3rem;
        height: 100%;
        

        .badge {
            width: 7.438rem;
            display: flex;
            border-radius: 6.25rem;
            align-items: center;
            background-color: var(--orange);
            color: var(--white);
            padding: .5rem;
            justify-content: center;

            p {
                font-size: 0.875rem;
                margin-left: .3rem;
                font-weight: 600;
            }
        }

        h4 {
            margin-top: 2rem;
            font-size: 2rem;
            color: var(--title);
        }

        .description {
            margin-top: 1rem;
            line-height: 2rem;
            width: 80%;
            color: var(--text);
        }
        
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    .iconDelete {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: var(--white);
        padding: 0;
        padding: .5rem;
        background: var(--light-grey);
        border-top-right-radius: 0.625rem;
        border-bottom-right-radius: 0.625rem;
        width: 2rem;
        cursor: pointer;

        
        svg {
            color: var(--blue);
            font-size: 1rem;
        }
    }

    .iconEdit {
        position: absolute;
        top: 1rem;
        right: 3.2rem;
        color: var(--white);
        padding: 0;
        padding: .5rem;
        background: var(--light-grey);
        border-top-left-radius: 0.625rem;
        border-bottom-left-radius: 0.625rem;
        width: 2rem;
        cursor: pointer;

        
        svg {
            color: var(--blue);
            font-size: 1rem;
        }
    }
`
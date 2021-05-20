import styled from 'styled-components';

export const CardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.6rem;
    border-bottom: 1px solid var(--light-grey);

    .first, 
    .second {
        display: flex;
        align-items: center;
        color: var(--title);
        font-family: Barlow, serif;
    }

    .first {
        h3 {
            color: var(--blue);
            font-size: 1.5rem;
            line-height: 3rem;
        }
    }

    .second {
        .close {
            border: none;
            background: transparent;
        }

        svg {
            font-size: 1.5rem;
            color: var(--text)
        }
    }
`

export const CardBody = styled.form`
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem;

    .avatar {
        position: relative;
        width: 162px;
        height: 162px;
        margin-bottom: 1.5rem;


        svg {
            position: absolute;
            font-size: 2.3rem;
            right: 0;
            color: var(--orange);
            cursor: pointer;

            :hover {
                color: var(--title);
            }
        }
    }

    img {
        width: 10rem;
        border-radius: 50%;
    }

    input {
        border: 0;
        margin: 1rem 0;
        padding: 1rem;
        border-radius: 0.625rem;
    }

    button {
        margin-top: 1rem;
        background-color: var(--green);
        color: var(--white);
    }
`
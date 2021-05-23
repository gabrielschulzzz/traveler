import styled from 'styled-components';

export const FormBody = styled.div`
        margin-top: 1rem;
        display: flex;
        flex-direction: column;

        label {
            color: var(--text);
            margin-bottom: .4rem;
        }

        input { 
            width: 100%;
            padding: 1rem;
            border-radius: 0.625rem;
            border: 1px solid var(--light-grey);
            margin-bottom: 1rem;
            background-color: var(--background);
            font-family: 'Heebo', sans-serif;
        }

        .form-foto {
            height: 10rem;
            border: 1px dashed var(--light-grey);
            border-radius: 0.625rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--orange);
            font-family: 'Heebo', sans-serif;
            background-color: var(--background);
            margin-bottom: 1.2rem;
            cursor: pointer;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 0.625rem;
            }
        }

        .form-foto-edit {
            margin-bottom: 1rem;
            position: relative;

            div {
                position: absolute;
                right: 10px;
                top: 10px;
                background-color: var(--background);
                padding: .5rem;
                border-radius: .625rem;

            svg {
                color: var(--text);
            }

            }    

            img {
                width: 100%;
                object-fit: cover;
                height: 14.875rem;
                border-radius: 0.625rem;
            }
        }

        textarea {
            margin-bottom: 1rem;
            font-family: 'Heebo', sans-serif;
            border: 1px solid var(--light-grey);
            border-radius: 0.625rem;
            background-color: var(--background);
            height: 12.625rem;
            resize: none;
            padding: 1rem;
        }

        .heading {
            margin: 1.5rem 0;
            color: var(--title);
            font-size: 1.6rem;
        }

        .map {
            margin-top: 1rem;
        }

`
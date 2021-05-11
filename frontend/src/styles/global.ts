import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #115D8C;
        --blue-low: #DDE9F0;
        --orange: #F25D27;
        --green: #51B853;
        --title: #123952;
        --text: #617480;
        --complement: #A0ACB2;
        --background: #F5F8FA;
        --white: #FFF;
        --light-grey: #DCE2E5;
        --red: #cf0000;
    }

    * {
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        font-family: 'Heebo', sans-serif;
        /* width */
        ::-webkit-scrollbar {
            width: .5rem;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 1.25rem;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #888;
        }
        

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #555;
        }
    }

    body, input, text-area, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Barlow', sans-serif;
        font-weight: 600;
    }

    button { 
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: var(--text);
    }

    .react-modal-overlay {
        background: rgba(17,93,140, 0.7);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content-small {
        width: 100%;
        max-width: 46rem;
        background: var(--background);
        outline: none;
        height: 28rem;
        border-radius: 1.25rem;
    }

    .react-modal-content {
        width: 100%;
        max-width: 46rem;
        background: var(--background);
        outline: none;
        height: 41.25rem;
        overflow-y: scroll;
        border-top-left-radius: 1.25rem;
        border-bottom-left-radius: 1.25rem;

        /* width */
        ::-webkit-scrollbar {
            width: .2rem;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 1.25rem;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #888;
        }
        

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #555;
        }
    }


`
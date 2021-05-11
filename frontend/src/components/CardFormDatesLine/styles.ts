import styled from 'styled-components'

export const Container = styled.div`
        color: var(--text);
        display: flex;
        align-items: center;
        justify-content: space-between;

        .first {
            flex: 1;
            display: flex;
            align-items: center;
            margin: 1rem 0;

            h3 {
                margin-right: 1rem;
                width: 20%;
            }

            .open-closed {
                display: flex;
                border: 1px solid var(--light-grey);
                border-radius: .625rem;

                .box {
                    padding: 1rem;
                    width: 130px;
                    text-align: center;
                    background-color: var(--background);
                }

                .box-first {
                    border-right: 1px solid var(--light-grey);
                }
            }
        }

        .second {
            display: flex;
            flex: 1;
            align-items: center;
            margin-left: 1rem;

            input {
                width: 30%;
                margin: 0;
            }

            p {
                margin-right: 1rem;
            }

            .second-time {
                margin-left: 1rem;
            }
        }
`
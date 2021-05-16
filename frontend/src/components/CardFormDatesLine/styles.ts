import { transparentize } from 'polished'
import styled from 'styled-components'

interface ContainerProps {
    isOpen?: boolean;
}

export const Container = styled.div<ContainerProps>`
        color: var(--text);
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        .first {
            display: flex;
            align-items: center;
            margin: 1rem 0;
            width: 50%;
            

            h3 {
                margin-right: 1rem;
                width: 20%;
            }

            .open-closed {
                display: flex;
                border: 1px solid var(--light-grey);
                border-radius: .625rem;
                background-color: var(--background);
                
                .box {
                    cursor: pointer;
                    padding: 1rem;
                    width: 130px;
                    text-align: center;
                }

                .box-first {
                    border-right: 1px solid var(--light-grey);
                    border-top-left-radius: .625rem;
                    border-bottom-left-radius: .625rem;
                    background-color: ${(props) => props.isOpen ? transparentize(0.8, "#51B853") : 'transparent'};
                }

                .box-second {
                    border-top-right-radius: .625rem;
                    border-bottom-right-radius: .625rem;
                    background-color: ${(props) => props.isOpen ? 'transparent' : transparentize(0.8, "#cf0000")};
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
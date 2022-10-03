import styled from "styled-components"

const CloseButton = (props) => {
    return (
        <Container {...props}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M18 6L6 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6 6L18 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Container>
    )
}

const Container = styled.btn`
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.3rem;
    border: none;
    background-color: black;
    color: white;
    fill: white;
    line-height: 0;
    cursor: pointer;
    border-radius: 50%;
    transform: translate(50%, -50%);

    svg {
        width: 1.1em;
        height: 1.1em;
    }
`

export default CloseButton

import PropTypes from "prop-types"
import { useEffect } from "react"
import styled from "styled-components"
import CloseButton from "./CloseButton"

export const Dialog = ({
    open,
    onClose,
    title,
    children,
    clickClose,
    escapeClose,
    showClose,
    fadeDuration,
    fadeDelay,
    modalClass,
    ...otherProps
}) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose()
            }
        }

        if (escapeClose) {
            document.addEventListener("keydown", handleEscape)
        }

        return () => {
            if (escapeClose) {
                document.removeEventListener("keydown", handleEscape)
            }
        }
    }, [escapeClose, onClose])

    if (!open) return null

    return (
        <Container
            onClick={clickClose ? onClose : null}
            aria-modal="true"
            aria-hidden={open ? "true" : "false"}
            role="dialog"
            fadeDuration={fadeDuration}
            fadeDelay={fadeDelay}
            {...otherProps}
        >
            <Modal
                onClick={(e) => {
                    e.stopPropagation()
                }}
                modalClass={modalClass}
            >
                {title && <TitleContainer>{title}</TitleContainer>}
                <Content>{children}</Content>
                {showClose && (
                    <CloseButton onClick={onClose} aria-label="Close" />
                )}
            </Modal>
        </Container>
    )
}

Dialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.node.isRequired,
    clickClose: PropTypes.bool,
    escapeClose: PropTypes.bool,
    showClose: PropTypes.bool,
    fadeDuration: PropTypes.number,
    fadeDelay: PropTypes.number,
    modalClass: PropTypes.string,
}

Dialog.defaultProps = {
    title: null,
    clickClose: true,
    escapeClose: true,
    showClose: true,
    fadeDuration: 0.3,
    fadeDelay: 0,
}

const Container = styled.div`
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    z-index: 1000;
    display: flex;
    padding: 2rem;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);

    animation: fadeIn ${(props) => props.fadeDuration}s
        ${(props) => props.fadeDelay}s ease-in-out;
`

const TitleContainer = styled.div`
    width: 100%;
    padding: 1em;
`

const Modal = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    max-height: 80vh;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

const Content = styled.div`
    flex: 1;
    padding: 1em;
`

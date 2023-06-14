import { IButton } from "../../hooks/interfaces"
import { StyledButton } from "./styled"


function Button ({type, writing}: IButton) {
    return (
        <>
            <StyledButton type={type}>{writing}</StyledButton>
        </>
    )
}

export {Button}
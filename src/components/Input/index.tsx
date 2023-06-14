import { IInputProps } from "../../hooks/interfaces"
import { StyledFieldset, StyledLegend } from "./Styled"

function Input ({legend, type, placeholder, register, nameError}: IInputProps){

    return (
        <StyledFieldset>
            <StyledLegend>{legend}</StyledLegend>
            <input type={type} placeholder={placeholder} {...register(nameError)}/>
        </StyledFieldset>
    )
}

export {Input}
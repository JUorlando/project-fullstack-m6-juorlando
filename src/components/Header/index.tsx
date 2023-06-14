import { Link } from "react-router-dom";
import { StyledHeader } from "./styled";
import { IRoutes } from "../../hooks/interfaces";

function Header ({route, nameRoute}: IRoutes){
    return (
        <StyledHeader>
            <h1>Contact Keeper</h1>
            <div>
                <Link to={route}>{nameRoute}</Link>
            </div>
        </StyledHeader>
    )
}

export {Header}
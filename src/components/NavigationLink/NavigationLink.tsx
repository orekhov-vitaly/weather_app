import { SytyledNavLink } from "./styles";
import type { NavigationLinkProps } from "./types";


function NavigationLink({path, name}:NavigationLinkProps) {
    return(
        <SytyledNavLink
            to={path}
            style={({ isActive }) => ({
                fontWeight: isActive ? "700" : "300",
            })}
        >
            {name}
        </SytyledNavLink>
    )
}

export default NavigationLink;
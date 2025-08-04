import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Sansepolcro",
    canonical: links.autospurgo["sansepolcro"],
});
export default withBaseProps({ 
    title: "Autospurgo Sansepolcro", 
    locationNames: {label: "Sansepolcro", href: "sansepolcro"}  
});

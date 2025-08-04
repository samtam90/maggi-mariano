import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Scheggino",
    canonical: links.autospurgo["scheggino"],
});
export default withBaseProps({ 
    title: "Autospurgo Scheggino", 
    locationNames: {label: "Scheggino", href: "scheggino"}  
});

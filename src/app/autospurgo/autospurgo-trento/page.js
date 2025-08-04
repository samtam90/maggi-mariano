import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Trento",
    canonical: links.autospurgo["trento"],
});
export default withBaseProps({ 
    title: "Autospurgo Trento", 
    locationNames: {label: "Trento", href: "trento"}  
});

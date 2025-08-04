import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Oristano",
    canonical: links.autospurgo["oristano"],
});
export default withBaseProps({ 
    title: "Autospurgo Oristano", 
    locationNames: {label: "Oristano", href: "oristano"}  
});

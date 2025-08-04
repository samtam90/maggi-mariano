import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Subbiano",
    canonical: links.autospurgo["subbiano"],
});
export default withBaseProps({ 
    title: "Autospurgo Subbiano", 
    locationNames: {label: "Subbiano", href: "subbiano"}  
});

import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Signa",
    canonical: links.autospurgo["signa"],
});
export default withBaseProps({ 
    title: "Autospurgo Signa", 
    locationNames: {label: "Signa", href: "signa"}  
});

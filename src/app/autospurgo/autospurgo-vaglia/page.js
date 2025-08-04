import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Vaglia",
    canonical: links.autospurgo["vaglia"],
});
export default withBaseProps({ 
    title: "Autospurgo Vaglia", 
    locationNames: {label: "Vaglia", href: "vaglia"}  
});

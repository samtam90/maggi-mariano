import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Sellano",
    canonical: links.autospurgo["sellano"],
});
export default withBaseProps({ 
    title: "Autospurgo Sellano", 
    locationNames: {label: "Sellano", href: "sellano"}  
});

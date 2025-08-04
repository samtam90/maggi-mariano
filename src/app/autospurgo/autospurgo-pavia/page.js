import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Pavia",
    canonical: links.autospurgo["pavia"],
});
export default withBaseProps({ 
    title: "Autospurgo Pavia", 
    locationNames: {label: "Pavia", href: "pavia"}  
});

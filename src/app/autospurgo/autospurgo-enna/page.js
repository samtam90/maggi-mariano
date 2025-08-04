import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Enna",
    canonical: links.autospurgo["enna"],
});
export default withBaseProps({ 
    title: "Autospurgo Enna", 
    locationNames: {label: "Enna", href: "enna"}  
});

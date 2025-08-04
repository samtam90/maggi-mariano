import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Siracusa",
    canonical: links.autospurgo["siracusa"],
});
export default withBaseProps({ 
    title: "Autospurgo Siracusa", 
    locationNames: {label: "Siracusa", href: "siracusa"}  
});

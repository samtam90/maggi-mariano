import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Sestino",
    canonical: links.autospurgo["sestino"],
});
export default withBaseProps({ 
    title: "Autospurgo Sestino", 
    locationNames: {label: "Sestino", href: "sestino"}  
});

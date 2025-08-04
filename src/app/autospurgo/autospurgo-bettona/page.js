import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Bettona",
    canonical: links.autospurgo["bettona"],
});
export default withBaseProps({ 
    title: "Autospurgo Bettona", 
    locationNames: {label: "Bettona", href: "bettona"}  
});

import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Verona",
    canonical: links.autospurgo["verona"],
});
export default withBaseProps({ 
    title: "Autospurgo Verona", 
    locationNames: {label: "Verona", href: "verona"}  
});

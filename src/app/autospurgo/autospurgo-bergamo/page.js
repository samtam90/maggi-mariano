import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Bergamo",
    canonical: links.autospurgo["bergamo"],
});
export default withBaseProps({ 
    title: "Autospurgo Bergamo", 
    locationNames: {label: "Bergamo", href: "bergamo"}  
});

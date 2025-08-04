import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Como",
    canonical: links.autospurgo["como"],
});
export default withBaseProps({ 
    title: "Autospurgo Como", 
    locationNames: {label: "Como", href: "como"}  
});

import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Pescara",
    canonical: links.autospurgo["pescara"],
});
export default withBaseProps({ 
    title: "Autospurgo Pescara", 
    locationNames: {label: "Pescara", href: "pescara"}  
});

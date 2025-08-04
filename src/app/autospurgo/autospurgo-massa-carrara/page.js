import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Massa-Carrara",
    canonical: links.autospurgo["massa-carrara"],
});
export default withBaseProps({ 
    title: "Autospurgo Massa-Carrara", 
    locationNames: {label: "Massa-Carrara", href: "massa-carrara"}  
});

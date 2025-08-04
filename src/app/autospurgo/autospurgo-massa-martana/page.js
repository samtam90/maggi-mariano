import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Massa Martana",
    canonical: links.autospurgo["massa-martana"],
});
export default withBaseProps({ 
    title: "Autospurgo Massa Martana", 
    locationNames: {label: "Massa Martana", href: "massa-martana"}  
});

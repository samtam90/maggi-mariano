import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Fiesole",
    canonical: links.autospurgo["fiesole"],
});
export default withBaseProps({ 
    title: "Autospurgo Fiesole", 
    locationNames: {label: "Fiesole", href: "fiesole"}  
});

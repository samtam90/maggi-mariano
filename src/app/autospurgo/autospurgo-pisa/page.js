import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Pisa",
    canonical: links.autospurgo["pisa"],
});
export default withBaseProps({ 
    title: "Autospurgo Pisa", 
    locationNames: {label: "Pisa", href: "pisa"}  
});

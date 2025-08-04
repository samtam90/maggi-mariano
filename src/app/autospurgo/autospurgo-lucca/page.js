import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Lucca",
    canonical: links.autospurgo["lucca"],
});
export default withBaseProps({ 
    title: "Autospurgo Lucca", 
    locationNames: {label: "Lucca", href: "lucca"}  
});

import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Sondrio",
    canonical: links.autospurgo["sondrio"],
});
export default withBaseProps({ 
    title: "Autospurgo Sondrio", 
    locationNames: {label: "Sondrio", href: "sondrio"}  
});

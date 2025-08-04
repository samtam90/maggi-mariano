import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Ferrara",
    canonical: links.autospurgo["ferrara"],
});
export default withBaseProps({ 
    title: "Autospurgo Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"}  
});

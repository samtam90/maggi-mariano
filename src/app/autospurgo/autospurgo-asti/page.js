import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Asti",
    canonical: links.autospurgo["asti"],
});
export default withBaseProps({ 
    title: "Autospurgo Asti", 
    locationNames: {label: "Asti", href: "asti"}  
});

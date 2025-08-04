import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Macerata",
    canonical: links.autospurgo["macerata"],
});
export default withBaseProps({ 
    title: "Autospurgo Macerata", 
    locationNames: {label: "Macerata", href: "macerata"}  
});

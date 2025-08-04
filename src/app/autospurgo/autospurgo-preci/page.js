import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Preci",
    canonical: links.autospurgo["preci"],
});
export default withBaseProps({ 
    title: "Autospurgo Preci", 
    locationNames: {label: "Preci", href: "preci"}  
});

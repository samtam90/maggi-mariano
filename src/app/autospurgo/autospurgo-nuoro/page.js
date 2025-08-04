import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Nuoro",
    canonical: links.autospurgo["nuoro"],
});
export default withBaseProps({ 
    title: "Autospurgo Nuoro", 
    locationNames: {label: "Nuoro", href: "nuoro"}  
});

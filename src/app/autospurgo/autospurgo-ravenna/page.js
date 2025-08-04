import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Ravenna",
    canonical: links.autospurgo["ravenna"],
});
export default withBaseProps({ 
    title: "Autospurgo Ravenna", 
    locationNames: {label: "Ravenna", href: "ravenna"}  
});

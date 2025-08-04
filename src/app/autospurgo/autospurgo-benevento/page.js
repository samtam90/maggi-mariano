import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Benevento",
    canonical: links.autospurgo["benevento"],
});
export default withBaseProps({ 
    title: "Autospurgo Benevento", 
    locationNames: {label: "Benevento", href: "benevento"}  
});

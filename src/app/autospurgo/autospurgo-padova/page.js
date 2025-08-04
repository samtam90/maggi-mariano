import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Padova",
    canonical: links.autospurgo["padova"],
});
export default withBaseProps({ 
    title: "Autospurgo Padova", 
    locationNames: {label: "Padova", href: "padova"}  
});

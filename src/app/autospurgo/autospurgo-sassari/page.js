import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Sassari",
    canonical: links.autospurgo["sassari"],
});
export default withBaseProps({ 
    title: "Autospurgo Sassari", 
    locationNames: {label: "Sassari", href: "sassari"}  
});

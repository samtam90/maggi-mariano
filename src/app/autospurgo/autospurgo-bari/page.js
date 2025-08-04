import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Bari",
    canonical: links.autospurgo["bari"],
});
export default withBaseProps({ 
    title: "Autospurgo Bari", 
    locationNames: {label: "Bari", href: "bari"}  
});

import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Reggello",
    canonical: links.autospurgo["reggello"],
});
export default withBaseProps({ 
    title: "Autospurgo Reggello", 
    locationNames: {label: "Reggello", href: "reggello"}  
});

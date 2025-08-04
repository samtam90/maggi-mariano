import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Latina",
    canonical: links.autospurgo["latina"],
});
export default withBaseProps({ 
    title: "Autospurgo Latina", 
    locationNames: {label: "Latina", href: "latina"}  
});

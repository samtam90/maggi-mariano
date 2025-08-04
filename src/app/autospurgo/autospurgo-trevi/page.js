import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Trevi",
    canonical: links.autospurgo["trevi"],
});
export default withBaseProps({ 
    title: "Autospurgo Trevi", 
    locationNames: {label: "Trevi", href: "trevi"}  
});

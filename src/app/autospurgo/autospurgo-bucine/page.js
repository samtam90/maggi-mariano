import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Bucine",
    canonical: links.autospurgo["bucine"],
});
export default withBaseProps({ 
    title: "Autospurgo Bucine", 
    locationNames: {label: "Bucine", href: "bucine"}  
});

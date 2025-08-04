import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Rufina",
    canonical: links.autospurgo["rufina"],
});
export default withBaseProps({ 
    title: "Autospurgo Rufina", 
    locationNames: {label: "Rufina", href: "rufina"}  
});

import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Impruneta",
    canonical: links.autospurgo["impruneta"],
});
export default withBaseProps({ 
    title: "Autospurgo Impruneta", 
    locationNames: {label: "Impruneta", href: "impruneta"}  
});

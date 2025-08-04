import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Cuneo",
    canonical: links.autospurgo["cuneo"],
});
export default withBaseProps({ 
    title: "Autospurgo Cuneo", 
    locationNames: {label: "Cuneo", href: "cuneo"}  
});

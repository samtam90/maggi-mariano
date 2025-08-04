import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo San Giustino",
    canonical: links.autospurgo["san-giustino"],
});
export default withBaseProps({ 
    title: "Autospurgo San Giustino", 
    locationNames: {label: "San Giustino", href: "san-giustino"}  
});

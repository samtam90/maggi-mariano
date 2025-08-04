import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo San Godenzo",
    canonical: links.autospurgo["san-godenzo"],
});
export default withBaseProps({ 
    title: "Autospurgo San Godenzo", 
    locationNames: {label: "San Godenzo", href: "san-godenzo"}  
});

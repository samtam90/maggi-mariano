import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo San Giustino" });
export default withBaseProps({ 
    title: "Autospurgo San Giustino", 
    locationNames: {label: "San Giustino", href: "san-giustino"}  
});

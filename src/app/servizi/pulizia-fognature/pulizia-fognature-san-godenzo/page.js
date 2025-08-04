import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature San Godenzo" });
export default withBaseProps({ 
    title: "Pulizia fognature San Godenzo", 
    locationNames: {label: "San Godenzo", href: "san-godenzo"}  
});

import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Scheggino" });
export default withBaseProps({ 
    title: "Autospurgo Scheggino", 
    locationNames: {label: "Scheggino", href: "scheggino"}  
});

import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Borgo San Lorenzo" });
export default withBaseProps({ 
    title: "Autospurgo Borgo San Lorenzo", 
    locationNames: {label: "Borgo San Lorenzo", href: "borgo-san-lorenzo"}  
});

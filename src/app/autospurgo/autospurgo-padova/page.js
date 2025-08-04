import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Padova" });
export default withBaseProps({ 
    title: "Autospurgo Padova", 
    locationNames: {label: "Padova", href: "padova"}  
});

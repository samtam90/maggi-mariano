import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Poppi" });
export default withBaseProps({ 
    title: "Autospurgo Poppi", 
    locationNames: {label: "Poppi", href: "poppi"}  
});

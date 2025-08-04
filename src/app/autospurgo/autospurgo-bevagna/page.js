import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Bevagna" });
export default withBaseProps({ 
    title: "Autospurgo Bevagna", 
    locationNames: {label: "Bevagna", href: "bevagna"}  
});

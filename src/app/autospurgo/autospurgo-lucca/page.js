import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Lucca" });
export default withBaseProps({ 
    title: "Autospurgo Lucca", 
    locationNames: {label: "Lucca", href: "lucca"}  
});

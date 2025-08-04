import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Savona" });
export default withBaseProps({ 
    title: "Autospurgo Savona", 
    locationNames: {label: "Savona", href: "savona"}  
});

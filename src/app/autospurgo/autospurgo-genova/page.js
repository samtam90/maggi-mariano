import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Genova" });
export default withBaseProps({ 
    title: "Autospurgo Genova", 
    locationNames: {label: "Genova", href: "genova"}  
});

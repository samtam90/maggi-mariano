import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Bucine" });
export default withBaseProps({ 
    title: "Autospurgo Bucine", 
    locationNames: {label: "Bucine", href: "bucine"}  
});

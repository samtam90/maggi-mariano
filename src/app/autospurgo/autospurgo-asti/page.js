import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Asti" });
export default withBaseProps({ 
    title: "Autospurgo Asti", 
    locationNames: {label: "Asti", href: "asti"}  
});

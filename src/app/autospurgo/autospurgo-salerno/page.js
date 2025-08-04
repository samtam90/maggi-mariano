import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Salerno" });
export default withBaseProps({ 
    title: "Autospurgo Salerno", 
    locationNames: {label: "Salerno", href: "salerno"}  
});

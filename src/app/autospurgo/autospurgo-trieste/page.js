import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Trieste" });
export default withBaseProps({ 
    title: "Autospurgo Trieste", 
    locationNames: {label: "Trieste", href: "trieste"}  
});

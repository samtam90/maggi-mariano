import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Brindisi" });
export default withBaseProps({ 
    title: "Autospurgo Brindisi", 
    locationNames: {label: "Brindisi", href: "brindisi"}  
});

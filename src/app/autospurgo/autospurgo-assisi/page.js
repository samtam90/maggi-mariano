import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Assisi" });
export default withBaseProps({ 
    title: "Autospurgo Assisi", 
    locationNames: {label: "Assisi", href: "assisi"}  
});

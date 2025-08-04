import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Pordenone" });
export default withBaseProps({ 
    title: "Autospurgo Pordenone", 
    locationNames: {label: "Pordenone", href: "pordenone"}  
});

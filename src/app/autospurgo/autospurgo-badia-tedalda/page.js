import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Badia Tedalda" });
export default withBaseProps({ 
    title: "Autospurgo Badia Tedalda", 
    locationNames: {label: "Badia Tedalda", href: "badia-tedalda"}  
});

import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Cagliari" });
export default withBaseProps({ 
    title: "Autospurgo Cagliari", 
    locationNames: {label: "Cagliari", href: "cagliari"}  
});

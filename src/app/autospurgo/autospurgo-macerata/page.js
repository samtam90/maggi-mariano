import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Macerata" });
export default withBaseProps({ 
    title: "Autospurgo Macerata", 
    locationNames: {label: "Macerata", href: "macerata"}  
});

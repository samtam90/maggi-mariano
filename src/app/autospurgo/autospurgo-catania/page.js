import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Catania" });
export default withBaseProps({ 
    title: "Autospurgo Catania", 
    locationNames: {label: "Catania", href: "catania"}  
});

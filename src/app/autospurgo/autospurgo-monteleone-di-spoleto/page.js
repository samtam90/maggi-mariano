import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Monteleone di Spoleto" });
export default withBaseProps({ 
    title: "Autospurgo Monteleone di Spoleto", 
    locationNames: {label: "Monteleone di Spoleto", href: "monteleone-di-spoleto"}  
});

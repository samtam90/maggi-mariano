import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Monteleone di Spoleto" });
export default withBaseProps({ 
    title: "Pulizia fognature Monteleone di Spoleto", 
    locationNames: {label: "Monteleone di Spoleto", href: "monteleone-di-spoleto"}  
});

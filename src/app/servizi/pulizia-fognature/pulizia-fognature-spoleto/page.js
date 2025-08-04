import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Spoleto" });
export default withBaseProps({ 
    title: "Pulizia fognature Spoleto", 
    locationNames: {label: "Spoleto", href: "spoleto"}  
});

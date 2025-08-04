import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Citerna" });
export default withBaseProps({ 
    title: "Pulizia fognature Citerna", 
    locationNames: {label: "Citerna", href: "citerna"}  
});

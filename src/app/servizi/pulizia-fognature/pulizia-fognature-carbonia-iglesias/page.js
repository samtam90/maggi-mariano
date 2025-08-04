import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Carbonia Iglesias" });
export default withBaseProps({ 
    title: "Pulizia fognature Carbonia Iglesias", 
    locationNames: {label: "Carbonia Iglesias", href: "carbonia-iglesias"}  
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Panicale" });
export default withBaseProps({ 
    title: "Pulizia fognature Panicale", 
    locationNames: {label: "Panicale", href: "panicale"}  
});

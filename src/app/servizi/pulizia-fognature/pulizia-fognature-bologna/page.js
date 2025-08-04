import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Bologna" });
export default withBaseProps({ 
    title: "Pulizia fognature Bologna", 
    locationNames: {label: "Bologna", href: "bologna"}  
});

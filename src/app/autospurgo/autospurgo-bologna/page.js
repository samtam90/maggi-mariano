import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Bologna" });
export default withBaseProps({ 
    title: "Autospurgo Bologna", 
    locationNames: {label: "Bologna", href: "bologna"}  
});

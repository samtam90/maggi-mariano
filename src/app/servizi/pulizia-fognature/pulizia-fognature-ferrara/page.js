import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Ferrara" });
export default withBaseProps({ 
    title: "Pulizia fognature Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"}  
});

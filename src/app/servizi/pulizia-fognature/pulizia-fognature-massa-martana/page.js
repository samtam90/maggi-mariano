import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Massa Martana" });
export default withBaseProps({ 
    title: "Pulizia fognature Massa Martana", 
    locationNames: {label: "Massa Martana", href: "massa-martana"}  
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Massa-Carrara" });
export default withBaseProps({ 
    title: "Pulizia fognature Massa-Carrara", 
    locationNames: {label: "Massa-Carrara", href: "massa-carrara"}  
});

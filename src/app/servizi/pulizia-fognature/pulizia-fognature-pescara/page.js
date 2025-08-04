import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Pescara" });
export default withBaseProps({ 
    title: "Pulizia fognature Pescara", 
    locationNames: {label: "Pescara", href: "pescara"}  
});

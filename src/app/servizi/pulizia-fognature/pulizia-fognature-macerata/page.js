import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Macerata" });
export default withBaseProps({ 
    title: "Pulizia fognature Macerata", 
    locationNames: {label: "Macerata", href: "macerata"}  
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Caprese Michelangelo" });
export default withBaseProps({ 
    title: "Pulizia fognature Caprese Michelangelo", 
    locationNames: {label: "Caprese Michelangelo", href: "caprese-michelangelo"}  
});

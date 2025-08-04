import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Valfabbrica",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Valfabbrica", 
    locationNames: {label: "Valfabbrica", href: "valfabbrica"}  
});
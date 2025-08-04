import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Valfabbrica",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Valfabbrica", 
    locationNames: {label: "Valfabbrica", href: "valfabbrica"}  
});

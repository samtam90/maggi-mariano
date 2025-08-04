import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Torino",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Torino", 
    locationNames: {label: "Torino", href: "torino"}  
});

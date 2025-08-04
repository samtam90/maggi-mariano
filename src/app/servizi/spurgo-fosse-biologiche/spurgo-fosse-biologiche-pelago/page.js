import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pelago",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pelago", 
    locationNames: {label: "Pelago", href: "pelago"}  
});

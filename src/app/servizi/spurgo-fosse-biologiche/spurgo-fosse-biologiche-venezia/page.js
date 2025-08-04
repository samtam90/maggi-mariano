import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Venezia",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Venezia", 
    locationNames: {label: "Venezia", href: "venezia"}  
});

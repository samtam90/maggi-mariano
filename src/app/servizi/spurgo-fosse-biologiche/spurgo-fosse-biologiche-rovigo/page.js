import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rovigo",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rovigo", 
    locationNames: {label: "Rovigo", href: "rovigo"}  
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Ogliastra",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Ogliastra", 
    locationNames: {label: "Ogliastra", href: "ogliastra"}  
});

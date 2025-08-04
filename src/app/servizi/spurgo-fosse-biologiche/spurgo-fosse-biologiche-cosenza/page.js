import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cosenza",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cosenza", 
    locationNames: {label: "Cosenza", href: "cosenza"}  
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche La Spezia",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"}  
});

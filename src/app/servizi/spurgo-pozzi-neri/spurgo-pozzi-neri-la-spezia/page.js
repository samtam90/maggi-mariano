import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri La Spezia",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"}  
});
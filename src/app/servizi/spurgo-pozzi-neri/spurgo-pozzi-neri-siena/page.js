import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Siena",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Siena", 
    locationNames: {label: "Siena", href: "siena"}  
});
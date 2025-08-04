import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Prato",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Prato", 
    locationNames: {label: "Prato", href: "prato"}  
});
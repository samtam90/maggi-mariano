import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Udine",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Udine", 
    locationNames: {label: "Udine", href: "udine"}  
});
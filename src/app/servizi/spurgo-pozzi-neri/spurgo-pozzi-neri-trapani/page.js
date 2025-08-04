import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Trapani",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Trapani", 
    locationNames: {label: "Trapani", href: "trapani"}  
});
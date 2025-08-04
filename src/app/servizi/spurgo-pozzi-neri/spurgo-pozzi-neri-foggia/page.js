import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Foggia",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Foggia", 
    locationNames: {label: "Foggia", href: "foggia"}  
});
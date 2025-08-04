import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ogliastra",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ogliastra", 
    locationNames: {label: "Ogliastra", href: "ogliastra"}  
});
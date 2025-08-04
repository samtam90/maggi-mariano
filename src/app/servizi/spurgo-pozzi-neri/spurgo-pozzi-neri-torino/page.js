import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Torino",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Torino", 
    locationNames: {label: "Torino", href: "torino"}  
});
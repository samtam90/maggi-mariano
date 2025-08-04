import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Palermo",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Palermo", 
    locationNames: {label: "Palermo", href: "palermo"}  
});
import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Marradi",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Marradi", 
    locationNames: {label: "Marradi", href: "marradi"}  
});
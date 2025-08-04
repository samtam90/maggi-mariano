import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Greve in Chianti",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Greve in Chianti", 
    locationNames: {label: "Greve in Chianti", href: "greve-in-chianti"}  
});
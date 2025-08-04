import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Chieti",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Chieti", 
    locationNames: {label: "Chieti", href: "chieti"}  
});
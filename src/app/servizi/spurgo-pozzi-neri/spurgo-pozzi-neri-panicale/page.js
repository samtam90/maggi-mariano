import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Panicale",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Panicale", 
    locationNames: {label: "Panicale", href: "panicale"}  
});
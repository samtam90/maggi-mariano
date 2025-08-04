import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Costacciaro",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Costacciaro", 
    locationNames: {label: "Costacciaro", href: "costacciaro"}  
});
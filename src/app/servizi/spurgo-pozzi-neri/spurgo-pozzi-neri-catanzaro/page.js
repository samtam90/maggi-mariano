import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Catanzaro",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Catanzaro", 
    locationNames: {label: "Catanzaro", href: "catanzaro"}  
});
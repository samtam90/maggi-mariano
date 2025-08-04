import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Catanzaro",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Catanzaro", 
    locationNames: {label: "Catanzaro", href: "catanzaro"}  
});

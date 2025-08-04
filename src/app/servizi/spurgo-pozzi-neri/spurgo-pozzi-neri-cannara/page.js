import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Cannara",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Cannara", 
    locationNames: {label: "Cannara", href: "cannara"}  
});
import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Soci",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Soci", 
    locationNames: {label: "Soci", href: "soci"}  
});
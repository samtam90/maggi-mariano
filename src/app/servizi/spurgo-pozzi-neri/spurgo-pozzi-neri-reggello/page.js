import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Reggello",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Reggello", 
    locationNames: {label: "Reggello", href: "reggello"}  
});
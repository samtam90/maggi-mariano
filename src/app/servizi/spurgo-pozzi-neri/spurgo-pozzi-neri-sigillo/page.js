import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sigillo",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sigillo", 
    locationNames: {label: "Sigillo", href: "sigillo"}  
});
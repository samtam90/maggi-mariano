import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Varese",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Varese", 
    locationNames: {label: "Varese", href: "varese"}  
});
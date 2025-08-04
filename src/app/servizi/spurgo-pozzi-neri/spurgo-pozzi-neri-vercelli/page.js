import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Vercelli",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"}  
});
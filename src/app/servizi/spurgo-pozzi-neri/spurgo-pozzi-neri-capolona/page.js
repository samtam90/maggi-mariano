import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Capolona",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Capolona", 
    locationNames: {label: "Capolona", href: "capolona"}  
});
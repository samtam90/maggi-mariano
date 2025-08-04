import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Savona",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Savona", 
    locationNames: {label: "Savona", href: "savona"}  
});
import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Londa",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Londa", 
    locationNames: {label: "Londa", href: "londa"}  
});
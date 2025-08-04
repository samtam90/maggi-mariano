import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pistoia",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pistoia", 
    locationNames: {label: "Pistoia", href: "pistoia"}  
});
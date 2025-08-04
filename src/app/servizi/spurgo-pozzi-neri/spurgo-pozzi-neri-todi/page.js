import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Todi",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Todi", 
    locationNames: {label: "Todi", href: "todi"}  
});
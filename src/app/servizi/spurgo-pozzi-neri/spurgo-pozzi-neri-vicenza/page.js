import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Vicenza",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Vicenza", 
    locationNames: {label: "Vicenza", href: "vicenza"}  
});
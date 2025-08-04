import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Terni",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Terni", 
    locationNames: {label: "Terni", href: "terni"}  
});
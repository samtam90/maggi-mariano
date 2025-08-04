import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Frosinone",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Frosinone", 
    locationNames: {label: "Frosinone", href: "frosinone"}  
});
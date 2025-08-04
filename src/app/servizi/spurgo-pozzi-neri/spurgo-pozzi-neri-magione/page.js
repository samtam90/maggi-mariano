import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Magione",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Magione", 
    locationNames: {label: "Magione", href: "magione"}  
});
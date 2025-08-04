import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Montaione",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Montaione", 
    locationNames: {label: "Montaione", href: "montaione"}  
});
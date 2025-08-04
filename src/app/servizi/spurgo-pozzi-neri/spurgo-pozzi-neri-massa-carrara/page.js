import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Massa-Carrara",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Massa-Carrara", 
    locationNames: {label: "Massa-Carrara", href: "massa-carrara"}  
});
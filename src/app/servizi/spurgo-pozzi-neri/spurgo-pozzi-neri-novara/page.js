import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Novara",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Novara", 
    locationNames: {label: "Novara", href: "novara"}  
});
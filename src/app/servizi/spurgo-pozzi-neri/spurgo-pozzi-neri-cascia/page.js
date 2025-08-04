import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Cascia",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Cascia", 
    locationNames: {label: "Cascia", href: "cascia"}  
});
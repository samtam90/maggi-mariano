import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Firenzuola",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Firenzuola", 
    locationNames: {label: "Firenzuola", href: "firenzuola"}  
});
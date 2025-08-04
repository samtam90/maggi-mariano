import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Massa Martana",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Massa Martana", 
    locationNames: {label: "Massa Martana", href: "massa-martana"}  
});
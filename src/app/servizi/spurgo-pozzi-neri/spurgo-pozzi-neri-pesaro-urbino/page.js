import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pesaro-Urbino",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pesaro-Urbino", 
    locationNames: {label: "Pesaro-Urbino", href: "pesaro-urbino"}  
});
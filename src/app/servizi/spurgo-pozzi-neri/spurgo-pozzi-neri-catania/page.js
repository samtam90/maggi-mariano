import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Catania",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Catania", 
    locationNames: {label: "Catania", href: "catania"}  
});
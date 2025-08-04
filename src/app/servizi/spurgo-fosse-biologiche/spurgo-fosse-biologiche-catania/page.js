import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Catania",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Catania", 
    locationNames: {label: "Catania", href: "catania"}  
});

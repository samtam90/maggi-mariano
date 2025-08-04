import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Livorno",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Livorno", 
    locationNames: {label: "Livorno", href: "livorno"}  
});

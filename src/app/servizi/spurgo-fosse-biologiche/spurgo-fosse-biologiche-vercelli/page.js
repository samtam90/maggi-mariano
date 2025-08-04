import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Vercelli",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"}  
});

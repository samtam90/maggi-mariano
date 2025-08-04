import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Capolona",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Capolona", 
    locationNames: {label: "Capolona", href: "capolona"}  
});

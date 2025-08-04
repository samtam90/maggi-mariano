import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Londa",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Londa", 
    locationNames: {label: "Londa", href: "londa"}  
});

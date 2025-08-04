import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cascia",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cascia", 
    locationNames: {label: "Cascia", href: "cascia"}  
});

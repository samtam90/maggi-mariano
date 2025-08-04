import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Camucia",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Camucia", 
    locationNames: {label: "Camucia", href: "camucia"}  
});

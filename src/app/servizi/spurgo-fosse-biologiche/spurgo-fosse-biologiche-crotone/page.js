import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Crotone",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Crotone", 
    locationNames: {label: "Crotone", href: "crotone"}  
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Montone",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Montone", 
    locationNames: {label: "Montone", href: "montone"}  
});

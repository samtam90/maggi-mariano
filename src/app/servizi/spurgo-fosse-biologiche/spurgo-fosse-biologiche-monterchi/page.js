import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Monterchi",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Monterchi", 
    locationNames: {label: "Monterchi", href: "monterchi"}  
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Ferrara",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"}  
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Asti",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Asti", 
    locationNames: {label: "Asti", href: "asti"}  
});

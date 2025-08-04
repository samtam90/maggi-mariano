import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Caserta",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Caserta", 
    locationNames: {label: "Caserta", href: "caserta"}  
});

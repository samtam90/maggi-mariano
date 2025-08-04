import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Avellino",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Avellino", 
    locationNames: {label: "Avellino", href: "avellino"}  
});

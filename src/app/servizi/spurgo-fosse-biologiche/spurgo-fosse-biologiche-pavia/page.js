import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pavia",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pavia", 
    locationNames: {label: "Pavia", href: "pavia"}  
});

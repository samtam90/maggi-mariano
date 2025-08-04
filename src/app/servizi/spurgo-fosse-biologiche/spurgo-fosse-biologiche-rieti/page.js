import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rieti",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rieti", 
    locationNames: {label: "Rieti", href: "rieti"}  
});

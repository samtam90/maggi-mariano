import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Chieti",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Chieti", 
    locationNames: {label: "Chieti", href: "chieti"}  
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Marradi",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Marradi", 
    locationNames: {label: "Marradi", href: "marradi"}  
});

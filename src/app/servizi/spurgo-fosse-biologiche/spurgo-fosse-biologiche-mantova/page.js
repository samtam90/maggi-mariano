import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Mantova",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Mantova", 
    locationNames: {label: "Mantova", href: "mantova"}  
});

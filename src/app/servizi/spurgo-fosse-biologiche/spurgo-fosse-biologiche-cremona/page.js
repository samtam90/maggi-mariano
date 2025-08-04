import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cremona",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cremona", 
    locationNames: {label: "Cremona", href: "cremona"}  
});

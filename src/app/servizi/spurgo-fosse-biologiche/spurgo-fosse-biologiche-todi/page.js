import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Todi",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Todi", 
    locationNames: {label: "Todi", href: "todi"}  
});

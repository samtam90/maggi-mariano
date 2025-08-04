import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Terni",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Terni", 
    locationNames: {label: "Terni", href: "terni"}  
});

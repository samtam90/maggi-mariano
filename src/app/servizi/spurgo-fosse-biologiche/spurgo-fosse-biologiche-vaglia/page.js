import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Vaglia",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Vaglia", 
    locationNames: {label: "Vaglia", href: "vaglia"}  
});

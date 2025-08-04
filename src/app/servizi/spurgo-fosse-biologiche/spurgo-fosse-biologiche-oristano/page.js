import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Oristano",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Oristano", 
    locationNames: {label: "Oristano", href: "oristano"}  
});

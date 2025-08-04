import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Reggello",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Reggello", 
    locationNames: {label: "Reggello", href: "reggello"}  
});

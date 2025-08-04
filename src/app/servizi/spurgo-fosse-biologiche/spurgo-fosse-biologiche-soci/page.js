import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Soci",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Soci", 
    locationNames: {label: "Soci", href: "soci"}  
});

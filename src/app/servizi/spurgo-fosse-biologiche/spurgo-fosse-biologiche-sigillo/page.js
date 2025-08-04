import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Sigillo",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Sigillo", 
    locationNames: {label: "Sigillo", href: "sigillo"}  
});

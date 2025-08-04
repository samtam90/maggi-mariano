import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Nuoro",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Nuoro", 
    locationNames: {label: "Nuoro", href: "nuoro"}  
});

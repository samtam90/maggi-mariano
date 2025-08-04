import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Castel San Niccolò",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Castel San Niccolò", 
    locationNames: {label: "Castel San Niccolò", href: "castel-san-niccolo"}  
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Scandicci",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Scandicci", 
    locationNames: {label: "Scandicci", href: "scandicci"}  
});

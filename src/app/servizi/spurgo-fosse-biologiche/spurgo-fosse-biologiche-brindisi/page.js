import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Brindisi",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Brindisi", 
    locationNames: {label: "Brindisi", href: "brindisi"}  
});

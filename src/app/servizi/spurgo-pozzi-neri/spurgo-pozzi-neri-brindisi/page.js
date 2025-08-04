import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Brindisi",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Brindisi", 
    locationNames: {label: "Brindisi", href: "brindisi"}  
});
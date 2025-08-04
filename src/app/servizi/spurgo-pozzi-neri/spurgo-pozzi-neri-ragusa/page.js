import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ragusa",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ragusa", 
    locationNames: {label: "Ragusa", href: "ragusa"}  
});
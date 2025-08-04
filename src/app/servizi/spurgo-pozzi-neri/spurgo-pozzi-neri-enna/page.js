import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Enna",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Enna", 
    locationNames: {label: "Enna", href: "enna"}  
});
import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Benevento",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Benevento", 
    locationNames: {label: "Benevento", href: "benevento"}  
});
import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Nuoro",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Nuoro", 
    locationNames: {label: "Nuoro", href: "nuoro"}  
});
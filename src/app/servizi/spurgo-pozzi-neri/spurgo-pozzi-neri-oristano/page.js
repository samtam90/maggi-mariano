import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Oristano",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Oristano", 
    locationNames: {label: "Oristano", href: "oristano"}  
});
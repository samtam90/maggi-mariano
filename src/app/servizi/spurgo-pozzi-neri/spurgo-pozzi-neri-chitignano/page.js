import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Chitignano",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Chitignano", 
    locationNames: {label: "Chitignano", href: "chitignano"}  
});
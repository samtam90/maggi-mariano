import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Scarperia e San Piero",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Scarperia e San Piero", 
    locationNames: {label: "Scarperia e San Piero", href: "scarperia-e-san-piero"}  
});
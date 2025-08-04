import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Scarperia e San Piero",
});
export default withBaseProps({ 
    title: "Trasporto acqua Scarperia e San Piero", 
    locationNames: {label: "Scarperia e San Piero", href: "scarperia-e-san-piero"}  
});
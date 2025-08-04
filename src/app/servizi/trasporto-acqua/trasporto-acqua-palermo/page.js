import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Palermo",
});
export default withBaseProps({ 
    title: "Trasporto acqua Palermo", 
    locationNames: {label: "Palermo", href: "palermo"}  
});
import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Fermo",
});
export default withBaseProps({ 
    title: "Trasporto acqua Fermo", 
    locationNames: {label: "Fermo", href: "fermo"}  
});
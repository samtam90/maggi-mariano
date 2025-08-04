import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Ortignano Raggiolo",
});
export default withBaseProps({ 
    title: "Trasporto acqua Ortignano Raggiolo", 
    locationNames: {label: "Ortignano Raggiolo", href: "ortignano-raggiolo"}  
});
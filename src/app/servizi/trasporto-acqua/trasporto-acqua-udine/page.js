import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Udine",
});
export default withBaseProps({ 
    title: "Trasporto acqua Udine", 
    locationNames: {label: "Udine", href: "udine"}  
});
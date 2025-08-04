import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Valfabbrica",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Valfabbrica", 
    locationNames: {label: "Valfabbrica", href: "valfabbrica"}  
});
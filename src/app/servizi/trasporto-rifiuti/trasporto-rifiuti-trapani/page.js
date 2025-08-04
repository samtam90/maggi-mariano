import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Trapani",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Trapani", 
    locationNames: {label: "Trapani", href: "trapani"}  
});
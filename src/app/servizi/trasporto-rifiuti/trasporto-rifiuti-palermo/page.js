import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Palermo",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Palermo", 
    locationNames: {label: "Palermo", href: "palermo"}  
});
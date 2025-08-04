import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Fermo",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Fermo", 
    locationNames: {label: "Fermo", href: "fermo"}  
});
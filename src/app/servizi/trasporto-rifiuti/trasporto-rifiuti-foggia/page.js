import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Foggia",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Foggia", 
    locationNames: {label: "Foggia", href: "foggia"}  
});
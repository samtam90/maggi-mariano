import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Costacciaro",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Costacciaro", 
    locationNames: {label: "Costacciaro", href: "costacciaro"}  
});
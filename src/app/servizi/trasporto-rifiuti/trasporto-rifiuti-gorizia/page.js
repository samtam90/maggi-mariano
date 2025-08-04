import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Gorizia",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Gorizia", 
    locationNames: {label: "Gorizia", href: "gorizia"}  
});
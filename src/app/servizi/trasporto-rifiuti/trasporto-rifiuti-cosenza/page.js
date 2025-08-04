import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cosenza",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cosenza", 
    locationNames: {label: "Cosenza", href: "cosenza"}  
});
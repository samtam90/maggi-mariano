import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti La Spezia",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"}  
});
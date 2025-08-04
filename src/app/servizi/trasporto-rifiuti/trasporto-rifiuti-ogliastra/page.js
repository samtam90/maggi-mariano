import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ogliastra",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ogliastra", 
    locationNames: {label: "Ogliastra", href: "ogliastra"}  
});
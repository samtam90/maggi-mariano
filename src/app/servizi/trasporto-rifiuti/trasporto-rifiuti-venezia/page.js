import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Venezia",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Venezia", 
    locationNames: {label: "Venezia", href: "venezia"}  
});
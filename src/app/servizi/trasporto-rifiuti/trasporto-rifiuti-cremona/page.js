import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cremona",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cremona", 
    locationNames: {label: "Cremona", href: "cremona"}  
});
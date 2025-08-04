import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Avellino",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Avellino", 
    locationNames: {label: "Avellino", href: "avellino"}  
});
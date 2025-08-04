import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Foligno",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Foligno", 
    locationNames: {label: "Foligno", href: "foligno"}  
});
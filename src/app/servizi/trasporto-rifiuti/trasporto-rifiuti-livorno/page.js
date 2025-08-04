import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Livorno",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Livorno", 
    locationNames: {label: "Livorno", href: "livorno"}  
});
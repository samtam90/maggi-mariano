import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Nuoro",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Nuoro", 
    locationNames: {label: "Nuoro", href: "nuoro"}  
});
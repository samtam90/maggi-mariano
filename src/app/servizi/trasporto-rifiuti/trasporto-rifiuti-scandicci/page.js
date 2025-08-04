import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Scandicci",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Scandicci", 
    locationNames: {label: "Scandicci", href: "scandicci"}  
});
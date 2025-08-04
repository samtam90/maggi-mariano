import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Brindisi",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Brindisi", 
    locationNames: {label: "Brindisi", href: "brindisi"}  
});
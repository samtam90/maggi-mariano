import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Collazzone",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Collazzone", 
    locationNames: {label: "Collazzone", href: "collazzone"}  
});
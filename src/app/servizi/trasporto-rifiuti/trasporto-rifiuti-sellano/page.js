import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sellano",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sellano", 
    locationNames: {label: "Sellano", href: "sellano"}  
});
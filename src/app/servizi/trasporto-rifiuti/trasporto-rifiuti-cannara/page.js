import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cannara",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cannara", 
    locationNames: {label: "Cannara", href: "cannara"}  
});
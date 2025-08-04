import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pescara",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pescara", 
    locationNames: {label: "Pescara", href: "pescara"}  
});
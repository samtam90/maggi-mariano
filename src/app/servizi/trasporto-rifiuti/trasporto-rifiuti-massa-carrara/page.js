import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Massa-Carrara",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Massa-Carrara", 
    locationNames: {label: "Massa-Carrara", href: "massa-carrara"}  
});
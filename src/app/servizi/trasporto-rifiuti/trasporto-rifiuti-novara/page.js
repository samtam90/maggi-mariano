import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Novara",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Novara", 
    locationNames: {label: "Novara", href: "novara"}  
});
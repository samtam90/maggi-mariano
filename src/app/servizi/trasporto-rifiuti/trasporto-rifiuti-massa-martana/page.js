import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Massa Martana",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Massa Martana", 
    locationNames: {label: "Massa Martana", href: "massa-martana"}  
});
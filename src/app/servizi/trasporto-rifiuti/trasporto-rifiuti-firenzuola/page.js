import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Firenzuola",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Firenzuola", 
    locationNames: {label: "Firenzuola", href: "firenzuola"}  
});
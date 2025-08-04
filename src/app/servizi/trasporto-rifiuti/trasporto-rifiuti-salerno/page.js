import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Salerno",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Salerno", 
    locationNames: {label: "Salerno", href: "salerno"}  
});
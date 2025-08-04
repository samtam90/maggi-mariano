import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Città della Pieve",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Città della Pieve", 
    locationNames: {label: "Città della Pieve", href: "città-della-pieve"}  
});
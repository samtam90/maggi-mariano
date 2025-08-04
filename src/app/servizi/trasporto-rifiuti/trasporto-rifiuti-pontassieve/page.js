import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pontassieve",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pontassieve", 
    locationNames: {label: "Pontassieve", href: "pontassieve"}  
});
import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Brescia",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Brescia", 
    locationNames: {label: "Brescia", href: "brescia"}  
});
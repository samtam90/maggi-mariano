import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Norcia",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Norcia", 
    locationNames: {label: "Norcia", href: "norcia"}  
});
import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Asti",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Asti", 
    locationNames: {label: "Asti", href: "asti"}  
});
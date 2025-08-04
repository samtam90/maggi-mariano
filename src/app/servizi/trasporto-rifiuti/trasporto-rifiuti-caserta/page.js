import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Caserta",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Caserta", 
    locationNames: {label: "Caserta", href: "caserta"}  
});
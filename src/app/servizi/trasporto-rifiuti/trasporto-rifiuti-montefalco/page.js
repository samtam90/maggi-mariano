import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montefalco",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montefalco", 
    locationNames: {label: "Montefalco", href: "montefalco"}  
});
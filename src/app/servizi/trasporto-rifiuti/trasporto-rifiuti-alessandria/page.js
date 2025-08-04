import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Alessandria",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Alessandria", 
    locationNames: {label: "Alessandria", href: "alessandria"}  
});
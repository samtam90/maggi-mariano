import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Fiesole",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Fiesole", 
    locationNames: {label: "Fiesole", href: "fiesole"}  
});
import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Lecco",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Lecco", 
    locationNames: {label: "Lecco", href: "lecco"}  
});
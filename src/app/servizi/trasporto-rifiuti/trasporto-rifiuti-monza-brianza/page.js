import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Monza Brianza",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Monza Brianza", 
    locationNames: {label: "Monza Brianza", href: "monza-brianza"}  
});
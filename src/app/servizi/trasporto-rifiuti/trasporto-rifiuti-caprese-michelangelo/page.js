import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Caprese Michelangelo",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Caprese Michelangelo", 
    locationNames: {label: "Caprese Michelangelo", href: "caprese-michelangelo"}  
});
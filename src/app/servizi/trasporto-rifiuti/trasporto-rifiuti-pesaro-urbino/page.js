import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pesaro-Urbino",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pesaro-Urbino", 
    locationNames: {label: "Pesaro-Urbino", href: "pesaro-urbino"}  
});
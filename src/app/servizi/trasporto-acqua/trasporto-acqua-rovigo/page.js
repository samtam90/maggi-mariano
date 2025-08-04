import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Rovigo",
});
export default withBaseProps({ 
    title: "Trasporto acqua Rovigo", 
    locationNames: {label: "Rovigo", href: "rovigo"}  
});
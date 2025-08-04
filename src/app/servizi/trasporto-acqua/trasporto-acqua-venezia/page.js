import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Venezia",
});
export default withBaseProps({ 
    title: "Trasporto acqua Venezia", 
    locationNames: {label: "Venezia", href: "venezia"}  
});
import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Bergamo",
});
export default withBaseProps({ 
    title: "Trasporto acqua Bergamo", 
    locationNames: {label: "Bergamo", href: "bergamo"}  
});
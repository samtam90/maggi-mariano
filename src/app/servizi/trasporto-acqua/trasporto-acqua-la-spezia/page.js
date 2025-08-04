import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua La Spezia",
});
export default withBaseProps({ 
    title: "Trasporto acqua La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"}  
});
import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Cosenza",
});
export default withBaseProps({ 
    title: "Trasporto acqua Cosenza", 
    locationNames: {label: "Cosenza", href: "cosenza"}  
});
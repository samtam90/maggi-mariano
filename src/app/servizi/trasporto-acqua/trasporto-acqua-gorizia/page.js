import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Gorizia",
});
export default withBaseProps({ 
    title: "Trasporto acqua Gorizia", 
    locationNames: {label: "Gorizia", href: "gorizia"}  
});
import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Marradi",
});
export default withBaseProps({ 
    title: "Trasporto acqua Marradi", 
    locationNames: {label: "Marradi", href: "marradi"}  
});
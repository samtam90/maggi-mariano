import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Chieti",
});
export default withBaseProps({ 
    title: "Trasporto acqua Chieti", 
    locationNames: {label: "Chieti", href: "chieti"}  
});
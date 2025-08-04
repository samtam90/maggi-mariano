import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Rieti",
});
export default withBaseProps({ 
    title: "Trasporto acqua Rieti", 
    locationNames: {label: "Rieti", href: "rieti"}  
});
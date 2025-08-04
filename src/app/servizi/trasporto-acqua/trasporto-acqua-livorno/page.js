import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Livorno",
});
export default withBaseProps({ 
    title: "Trasporto acqua Livorno", 
    locationNames: {label: "Livorno", href: "livorno"}  
});
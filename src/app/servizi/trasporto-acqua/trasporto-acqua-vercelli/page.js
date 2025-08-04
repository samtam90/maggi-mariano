import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Vercelli",
});
export default withBaseProps({ 
    title: "Trasporto acqua Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"}  
});
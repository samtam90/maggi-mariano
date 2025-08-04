import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Mantova",
});
export default withBaseProps({ 
    title: "Trasporto acqua Mantova", 
    locationNames: {label: "Mantova", href: "mantova"}  
});
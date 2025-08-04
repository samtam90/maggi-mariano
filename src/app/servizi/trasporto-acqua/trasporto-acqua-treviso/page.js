import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Treviso",
});
export default withBaseProps({ 
    title: "Trasporto acqua Treviso", 
    locationNames: {label: "Treviso", href: "treviso"}  
});
import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Londa",
});
export default withBaseProps({ 
    title: "Trasporto acqua Londa", 
    locationNames: {label: "Londa", href: "londa"}  
});
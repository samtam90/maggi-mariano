import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Firenzuola",
});
export default withBaseProps({ 
    title: "Trasporto acqua Firenzuola", 
    locationNames: {label: "Firenzuola", href: "firenzuola"}  
});
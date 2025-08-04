import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Pesaro-Urbino",
});
export default withBaseProps({ 
    title: "Trasporto acqua Pesaro-Urbino", 
    locationNames: {label: "Pesaro-Urbino", href: "pesaro-urbino"}  
});
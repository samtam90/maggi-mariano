import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Gambassi Terme",
});
export default withBaseProps({ 
    title: "Trasporto acqua Gambassi Terme", 
    locationNames: {label: "Gambassi Terme", href: "gambassi-terme"}  
});
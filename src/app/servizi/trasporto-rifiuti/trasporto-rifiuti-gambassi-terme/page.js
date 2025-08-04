import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Gambassi Terme",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Gambassi Terme", 
    locationNames: {label: "Gambassi Terme", href: "gambassi-terme"}  
});
import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Gambassi Terme",
  canonical: links.servizi["trasporto-rifiuti"]["gambassi-terme"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Gambassi Terme", 
    locationNames: {label: "Gambassi Terme", href: "gambassi-terme"}  
});
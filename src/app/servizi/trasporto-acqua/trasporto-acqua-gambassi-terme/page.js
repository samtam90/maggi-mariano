import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Gambassi Terme",
  canonical: links.servizi["trasporto-acqua"]["gambassi-terme"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Gambassi Terme", 
    locationNames: {label: "Gambassi Terme", href: "gambassi-terme"}  
});
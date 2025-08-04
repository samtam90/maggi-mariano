import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Gambassi Terme",
  canonical: links.servizi["pulizia-fognature"]["gambassi-terme"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Gambassi Terme", 
    locationNames: {label: "Gambassi Terme", href: "gambassi-terme"}  
});

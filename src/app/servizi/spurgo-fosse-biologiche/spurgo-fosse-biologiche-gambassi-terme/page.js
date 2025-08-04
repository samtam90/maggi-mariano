import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Gambassi Terme",
  canonical: links.servizi["spurgo-fosse-biologiche"]["gambassi-terme"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Gambassi Terme", 
    locationNames: {label: "Gambassi Terme", href: "gambassi-terme"}  
});

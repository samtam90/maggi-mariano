import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Gambassi Terme",
  canonical: links.servizi["noleggio-bagni-chimici"]["gambassi-terme"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Gambassi Terme", 
  locationNames: {label: "Gambassi Terme", href: "gambassi-terme"} 
});

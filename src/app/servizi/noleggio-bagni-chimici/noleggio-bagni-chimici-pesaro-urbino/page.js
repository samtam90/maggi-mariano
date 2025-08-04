import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pesaro-Urbino",
  canonical: links.servizi["noleggio-bagni-chimici"]["pesaro-urbino"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pesaro-Urbino", 
  locationNames: {label: "Pesaro-Urbino", href: "pesaro-urbino"} 
});

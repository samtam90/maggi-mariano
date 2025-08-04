import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Nocera Umbra",
  canonical: links.servizi["noleggio-bagni-chimici"]["nocera-umbra"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Nocera Umbra", 
  locationNames: {label: "Nocera Umbra", href: "nocera-umbra"} 
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Reggio Calabria",
  canonical: links.servizi["noleggio-bagni-chimici"]["reggio-calabria"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Reggio Calabria", 
  locationNames: {label: "Reggio Calabria", href: "reggio-calabria"} 
});

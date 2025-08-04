import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Medio Campidano",
  canonical: links.servizi["noleggio-bagni-chimici"]["medio-campidano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Medio Campidano", 
  locationNames: {label: "Medio Campidano", href: "medio-campidano"} 
});

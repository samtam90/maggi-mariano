import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Vallo di Nera",
  canonical: links.servizi["noleggio-bagni-chimici"]["vallo-di-nera"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Vallo di Nera", 
  locationNames: {label: "Vallo di Nera", href: "vallo-di-nera"} 
});

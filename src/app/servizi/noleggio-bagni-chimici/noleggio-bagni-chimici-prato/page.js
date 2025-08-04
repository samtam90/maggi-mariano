import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Prato",
  canonical: links.servizi["noleggio-bagni-chimici"]["prato"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Prato", 
  locationNames: {label: "Prato", href: "prato"} 
});

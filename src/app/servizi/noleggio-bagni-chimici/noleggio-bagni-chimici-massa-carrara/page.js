import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Massa-Carrara",
  canonical: links.servizi["noleggio-bagni-chimici"]["massa-carrara"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Massa-Carrara", 
  locationNames: {label: "Massa-Carrara", href: "massa-carrara"} 
});

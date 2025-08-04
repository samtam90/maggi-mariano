import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Novara",
  canonical: links.servizi["noleggio-bagni-chimici"]["novara"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Novara", 
  locationNames: {label: "Novara", href: "novara"} 
});

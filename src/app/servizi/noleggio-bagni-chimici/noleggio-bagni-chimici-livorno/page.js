import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Livorno",
  canonical: links.servizi["noleggio-bagni-chimici"]["livorno"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Livorno", 
  locationNames: {label: "Livorno", href: "livorno"} 
});

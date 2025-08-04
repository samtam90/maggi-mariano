import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rovigo",
  canonical: links.servizi["noleggio-bagni-chimici"]["rovigo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Rovigo", 
  locationNames: {label: "Rovigo", href: "rovigo"} 
});

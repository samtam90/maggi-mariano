import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Soci",
  canonical: links.servizi["noleggio-bagni-chimici"]["soci"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Soci", 
  locationNames: {label: "Soci", href: "soci"} 
});

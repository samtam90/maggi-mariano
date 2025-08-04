import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bibbiena",
  canonical: links.servizi["noleggio-bagni-chimici"]["bibbiena"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Bibbiena", 
  locationNames: {label: "Bibbiena", href: "bibbiena"} 
});

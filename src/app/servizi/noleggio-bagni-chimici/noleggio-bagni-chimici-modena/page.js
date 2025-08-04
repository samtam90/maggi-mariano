import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Modena",
  canonical: links.servizi["noleggio-bagni-chimici"]["modena"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Modena", 
  locationNames: {label: "Modena", href: "modena"} 
});

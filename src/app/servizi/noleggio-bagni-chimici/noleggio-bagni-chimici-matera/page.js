import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Matera",
  canonical: links.servizi["noleggio-bagni-chimici"]["matera"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Matera", 
  locationNames: {label: "Matera", href: "matera"} 
});

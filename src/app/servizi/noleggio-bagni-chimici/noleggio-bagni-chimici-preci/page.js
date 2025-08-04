import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Preci",
  canonical: links.servizi["noleggio-bagni-chimici"]["preci"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Preci", 
  locationNames: {label: "Preci", href: "preci"} 
});

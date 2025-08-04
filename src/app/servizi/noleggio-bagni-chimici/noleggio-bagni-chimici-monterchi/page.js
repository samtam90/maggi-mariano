import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Monterchi",
  canonical: links.servizi["noleggio-bagni-chimici"]["monterchi"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Monterchi", 
  locationNames: {label: "Monterchi", href: "monterchi"} 
});

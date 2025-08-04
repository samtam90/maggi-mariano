import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lodi",
  canonical: links.servizi["noleggio-bagni-chimici"]["lodi"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Lodi", 
  locationNames: {label: "Lodi", href: "lodi"} 
});

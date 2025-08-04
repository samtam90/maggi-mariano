import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Udine",
  canonical: links.servizi["noleggio-bagni-chimici"]["udine"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Udine", 
  locationNames: {label: "Udine", href: "udine"} 
});

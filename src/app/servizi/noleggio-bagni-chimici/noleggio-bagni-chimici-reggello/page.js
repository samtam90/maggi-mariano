import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Reggello",
  canonical: links.servizi["noleggio-bagni-chimici"]["reggello"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Reggello", 
  locationNames: {label: "Reggello", href: "reggello"} 
});

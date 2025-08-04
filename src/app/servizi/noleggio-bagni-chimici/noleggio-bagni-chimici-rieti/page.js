import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rieti",
  canonical: links.servizi["noleggio-bagni-chimici"]["rieti"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Rieti", 
  locationNames: {label: "Rieti", href: "rieti"} 
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ortignano Raggiolo",
  canonical: links.servizi["noleggio-bagni-chimici"]["ortignano-raggiolo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Ortignano Raggiolo", 
  locationNames: {label: "Ortignano Raggiolo", href: "ortignano-raggiolo"} 
});

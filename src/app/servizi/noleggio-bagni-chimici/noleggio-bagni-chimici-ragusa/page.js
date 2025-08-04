import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ragusa",
  canonical: links.servizi["noleggio-bagni-chimici"]["ragusa"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Ragusa", 
  locationNames: {label: "Ragusa", href: "ragusa"} 
});

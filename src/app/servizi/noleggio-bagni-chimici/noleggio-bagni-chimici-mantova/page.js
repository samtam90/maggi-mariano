import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Mantova",
  canonical: links.servizi["noleggio-bagni-chimici"]["mantova"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Mantova", 
  locationNames: {label: "Mantova", href: "mantova"} 
});

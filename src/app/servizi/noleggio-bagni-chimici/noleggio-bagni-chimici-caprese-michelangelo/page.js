import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Caprese Michelangelo",
  canonical: links.servizi["noleggio-bagni-chimici"]["caprese-michelangelo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Caprese Michelangelo", 
  locationNames: {label: "Caprese Michelangelo", href: "caprese-michelangelo"} 
});

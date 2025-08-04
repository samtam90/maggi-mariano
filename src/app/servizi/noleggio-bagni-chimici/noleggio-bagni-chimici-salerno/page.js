import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Salerno",
  canonical: links.servizi["noleggio-bagni-chimici"]["salerno"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Salerno", 
  locationNames: {label: "Salerno", href: "salerno"} 
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Carbonia Iglesias",
  canonical: links.servizi["noleggio-bagni-chimici"]["carbonia-iglesias"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Carbonia Iglesias", 
  locationNames: {label: "Carbonia Iglesias", href: "carbonia-iglesias"} 
});

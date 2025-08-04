import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Marradi",
  canonical: links.servizi["noleggio-bagni-chimici"]["marradi"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Marradi", 
  locationNames: {label: "Marradi", href: "marradi"} 
});

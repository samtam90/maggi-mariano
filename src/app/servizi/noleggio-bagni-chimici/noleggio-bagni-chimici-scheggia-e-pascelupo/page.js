import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Scheggia e Pascelupo",
  canonical: links.servizi["noleggio-bagni-chimici"]["scheggia-e-pascelupo"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Scheggia e Pascelupo", 
  locationNames: {label: "Scheggia e Pascelupo", href: "scheggia-e-pascelupo"} 
});

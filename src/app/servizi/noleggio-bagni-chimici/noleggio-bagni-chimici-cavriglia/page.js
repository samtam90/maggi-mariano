import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cavriglia",
  canonical: links.servizi["noleggio-bagni-chimici"]["cavriglia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Cavriglia", 
  locationNames: {label: "Cavriglia", href: "cavriglia"} 
});

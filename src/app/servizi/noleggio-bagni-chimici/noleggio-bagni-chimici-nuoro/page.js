import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Nuoro",
  canonical: links.servizi["noleggio-bagni-chimici"]["nuoro"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Nuoro", 
  locationNames: {label: "Nuoro", href: "nuoro"} 
});

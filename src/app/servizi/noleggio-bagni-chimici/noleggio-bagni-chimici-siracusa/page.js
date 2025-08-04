import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Siracusa",
  canonical: links.servizi["noleggio-bagni-chimici"]["siracusa"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Siracusa", 
  locationNames: {label: "Siracusa", href: "siracusa"} 
});

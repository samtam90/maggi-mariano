import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sant'Anatolia di Narco",
  canonical: links.servizi["noleggio-bagni-chimici"]["sant-anatolia-di-narco"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Sant'Anatolia di Narco", 
  locationNames: {label: "Sant'Anatolia di Narco", href: "sant-anatolia-di-narco"} 
});

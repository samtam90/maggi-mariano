import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Catania",
  canonical: links.servizi["noleggio-bagni-chimici"]["catania"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Catania", 
  locationNames: {label: "Catania", href: "catania"} 
});

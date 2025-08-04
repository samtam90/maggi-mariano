import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cannara",
  canonical: links.servizi["noleggio-bagni-chimici"]["cannara"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Cannara", 
  locationNames: {label: "Cannara", href: "cannara"} 
});

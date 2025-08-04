import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pescara",
  canonical: links.servizi["noleggio-bagni-chimici"]["pescara"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pescara", 
  locationNames: {label: "Pescara", href: "pescara"} 
});

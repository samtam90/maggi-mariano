import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Laterina",
  canonical: links.servizi["noleggio-bagni-chimici"]["laterina"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Laterina", 
  locationNames: {label: "Laterina", href: "laterina"} 
});

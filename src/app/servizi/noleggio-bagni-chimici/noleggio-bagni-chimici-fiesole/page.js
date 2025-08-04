import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Fiesole",
  canonical: links.servizi["noleggio-bagni-chimici"]["fiesole"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Fiesole", 
  locationNames: {label: "Fiesole", href: "fiesole"} 
});

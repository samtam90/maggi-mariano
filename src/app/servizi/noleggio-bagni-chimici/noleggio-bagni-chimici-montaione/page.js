import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montaione",
  canonical: links.servizi["noleggio-bagni-chimici"]["montaione"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Montaione", 
  locationNames: {label: "Montaione", href: "montaione"} 
});

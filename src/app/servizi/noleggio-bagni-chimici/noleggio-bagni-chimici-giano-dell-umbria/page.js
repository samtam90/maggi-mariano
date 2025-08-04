import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Giano dell'Umbria",
  canonical: links.servizi["noleggio-bagni-chimici"]["giano-dell-umbria"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Giano dell'Umbria", 
  locationNames: {label: "Giano dell'Umbria", href: "giano-dell-umbria"} 
});

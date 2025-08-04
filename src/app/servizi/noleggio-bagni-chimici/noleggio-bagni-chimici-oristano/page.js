import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Oristano",
  canonical: links.servizi["noleggio-bagni-chimici"]["oristano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Oristano", 
  locationNames: {label: "Oristano", href: "oristano"} 
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cerreto Guidi",
  canonical: links.servizi["noleggio-bagni-chimici"]["cerreto-guidi"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Cerreto Guidi", 
  locationNames: {label: "Cerreto Guidi", href: "cerreto-guidi"} 
});

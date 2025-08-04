import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lucignano",
  canonical: links.servizi["noleggio-bagni-chimici"]["lucignano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Lucignano", 
  locationNames: {label: "Lucignano", href: "lucignano"} 
});

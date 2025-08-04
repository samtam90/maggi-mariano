import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Chitignano",
  canonical: links.servizi["noleggio-bagni-chimici"]["chitignano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Chitignano", 
  locationNames: {label: "Chitignano", href: "chitignano"} 
});

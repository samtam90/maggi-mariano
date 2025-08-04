import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Calenzano",
  canonical: links.servizi["noleggio-bagni-chimici"]["calenzano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Calenzano", 
  locationNames: {label: "Calenzano", href: "calenzano"} 
});

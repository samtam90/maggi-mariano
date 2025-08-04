import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Forlì-Cesena",
  canonical: links.servizi["noleggio-bagni-chimici"]["forli-cesena"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Forlì-Cesena", 
  locationNames: {label: "Forlì-Cesena", href: "forli-cesena"} 
});

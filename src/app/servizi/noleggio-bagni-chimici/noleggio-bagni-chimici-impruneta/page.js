import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Impruneta",
  canonical: links.servizi["noleggio-bagni-chimici"]["impruneta"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Impruneta", 
  locationNames: {label: "Impruneta", href: "impruneta"} 
});

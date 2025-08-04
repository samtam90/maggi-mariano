import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Greve in Chianti",
  canonical: links.servizi["noleggio-bagni-chimici"]["greve-in-chianti"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Greve in Chianti", 
  locationNames: {label: "Greve in Chianti", href: "greve-in-chianti"} 
});

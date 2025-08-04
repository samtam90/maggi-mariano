import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Fossato di Vico",
  canonical: links.servizi["noleggio-bagni-chimici"]["fossato-di-vico"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Fossato di Vico", 
  locationNames: {label: "Fossato di Vico", href: "fossato-di-vico"} 
});

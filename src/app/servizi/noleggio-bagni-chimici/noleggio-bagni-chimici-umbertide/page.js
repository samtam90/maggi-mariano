import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Umbertide",
  canonical: links.servizi["noleggio-bagni-chimici"]["umbertide"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Umbertide", 
  locationNames: {label: "Umbertide", href: "umbertide"} 
});

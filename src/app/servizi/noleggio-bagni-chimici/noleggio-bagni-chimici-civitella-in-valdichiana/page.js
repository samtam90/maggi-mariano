import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Civitella in Valdichiana",
  canonical: links.servizi["noleggio-bagni-chimici"]["civitella-in-valdichiana"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Civitella in Valdichiana", 
  locationNames: {label: "Civitella in Valdichiana", href: "civitella-in-valdichiana"} 
});

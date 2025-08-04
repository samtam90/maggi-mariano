import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montemignaio",
  canonical: links.servizi["noleggio-bagni-chimici"]["montemignaio"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Montemignaio", 
  locationNames: {label: "Montemignaio", href: "montemignaio"} 
});

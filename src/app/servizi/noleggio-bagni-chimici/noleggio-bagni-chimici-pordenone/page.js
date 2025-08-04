import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pordenone",
  canonical: links.servizi["noleggio-bagni-chimici"]["pordenone"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pordenone", 
  locationNames: {label: "Pordenone", href: "pordenone"} 
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pisa",
  canonical: links.servizi["noleggio-bagni-chimici"]["pisa"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pisa", 
  locationNames: {label: "Pisa", href: "pisa"} 
});

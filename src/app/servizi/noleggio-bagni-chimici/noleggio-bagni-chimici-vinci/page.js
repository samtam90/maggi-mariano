import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Vinci",
  canonical: links.servizi["noleggio-bagni-chimici"]["vinci"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Vinci", 
  locationNames: {label: "Vinci", href: "vinci"} 
});

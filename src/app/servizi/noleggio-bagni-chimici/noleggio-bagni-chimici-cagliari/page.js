import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cagliari",
  canonical: links.servizi["noleggio-bagni-chimici"]["cagliari"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Cagliari", 
  locationNames: {label: "Cagliari", href: "cagliari"} 
});

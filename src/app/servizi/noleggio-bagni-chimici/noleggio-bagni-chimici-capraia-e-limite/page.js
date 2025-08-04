import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Capraia e Limite",
  canonical: links.servizi["noleggio-bagni-chimici"]["capraia-e-limite"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Capraia e Limite", 
  locationNames: {label: "Capraia e Limite", href: "capraia-e-limite"} 
});

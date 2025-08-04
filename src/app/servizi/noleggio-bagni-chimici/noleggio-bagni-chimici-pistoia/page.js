import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pistoia",
  canonical: links.servizi["noleggio-bagni-chimici"]["pistoia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pistoia", 
  locationNames: {label: "Pistoia", href: "pistoia"} 
});

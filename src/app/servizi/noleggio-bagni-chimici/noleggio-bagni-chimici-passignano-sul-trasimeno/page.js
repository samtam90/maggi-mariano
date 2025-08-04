import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Passignano sul Trasimeno",
  canonical: links.servizi["noleggio-bagni-chimici"]["passignano-sul-trasimeno"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Passignano sul Trasimeno", 
  locationNames: {label: "Passignano sul Trasimeno", href: "passignano-sul-trasimeno"} 
});

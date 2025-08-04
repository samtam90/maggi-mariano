import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Tuoro sul Trasimeno",
  canonical: links.servizi["noleggio-bagni-chimici"]["tuoro-sul-trasimeno"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Tuoro sul Trasimeno", 
  locationNames: {label: "Tuoro sul Trasimeno", href: "tuoro-sul-trasimeno"} 
});

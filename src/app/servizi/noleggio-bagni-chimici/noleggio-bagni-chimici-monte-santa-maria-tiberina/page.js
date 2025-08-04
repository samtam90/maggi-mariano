import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Monte Santa Maria Tiberina",
  canonical: links.servizi["noleggio-bagni-chimici"]["monte-santa-maria-tiberina"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Monte Santa Maria Tiberina", 
  locationNames: {label: "Monte Santa Maria Tiberina", href: "monte-santa-maria-tiberina"} 
});

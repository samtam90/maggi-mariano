import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Fratta Todina",
  canonical: links.servizi["noleggio-bagni-chimici"]["fratta-todina"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Fratta Todina", 
  locationNames: {label: "Fratta Todina", href: "fratta-todina"} 
});

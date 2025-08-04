import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rassina",
  canonical: links.servizi["noleggio-bagni-chimici"]["rassina"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Rassina", 
  locationNames: {label: "Rassina", href: "rassina"} 
});

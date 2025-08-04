import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Napoli",
  canonical: links.servizi["noleggio-bagni-chimici"]["napoli"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Napoli", 
  locationNames: {label: "Napoli", href: "napoli"} 
});

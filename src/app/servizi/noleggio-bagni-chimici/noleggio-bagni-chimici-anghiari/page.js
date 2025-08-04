import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Anghiari",
  canonical: links.servizi["noleggio-bagni-chimici"]["anghiari"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Anghiari", 
  locationNames: {label: "Anghiari", href: "anghiari"} 
});

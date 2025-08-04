import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Vibo Valentia",
  canonical: links.servizi["noleggio-bagni-chimici"]["vibo-valentia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Vibo Valentia", 
  locationNames: {label: "Vibo Valentia", href: "vibo-valentia"} 
});

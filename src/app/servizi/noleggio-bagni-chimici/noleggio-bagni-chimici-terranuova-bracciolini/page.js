import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Terranuova Bracciolini",
  canonical: links.servizi["noleggio-bagni-chimici"]["terranuova-bracciolini"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Terranuova Bracciolini", 
  locationNames: {label: "Terranuova Bracciolini", href: "terranuova-bracciolini"} 
});

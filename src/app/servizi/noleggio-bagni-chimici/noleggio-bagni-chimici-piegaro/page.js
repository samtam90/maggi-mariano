import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Piegaro",
  canonical: links.servizi["noleggio-bagni-chimici"]["piegaro"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Piegaro", 
  locationNames: {label: "Piegaro", href: "piegaro"} 
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Alessandria",
  canonical: links.servizi["noleggio-bagni-chimici"]["alessandria"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Alessandria", 
  locationNames: {label: "Alessandria", href: "alessandria"} 
});

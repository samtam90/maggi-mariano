import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Caserta",
  canonical: links.servizi["noleggio-bagni-chimici"]["caserta"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Caserta", 
  locationNames: {label: "Caserta", href: "caserta"} 
});

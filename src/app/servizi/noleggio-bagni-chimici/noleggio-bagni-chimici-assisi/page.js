import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Assisi",
  canonical: links.servizi["noleggio-bagni-chimici"]["assisi"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Assisi", 
  locationNames: {label: "Assisi", href: "assisi"} 
});

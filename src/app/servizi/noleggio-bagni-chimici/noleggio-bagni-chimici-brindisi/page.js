import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Brindisi",
  canonical: links.servizi["noleggio-bagni-chimici"]["brindisi"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Brindisi", 
  locationNames: {label: "Brindisi", href: "brindisi"} 
});

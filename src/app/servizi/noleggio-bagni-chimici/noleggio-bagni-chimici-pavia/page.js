import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pavia",
  canonical: links.servizi["noleggio-bagni-chimici"]["pavia"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pavia", 
  locationNames: {label: "Pavia", href: "pavia"} 
});

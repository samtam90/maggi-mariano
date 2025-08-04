import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Chiusi della Verna",
  canonical: links.servizi["noleggio-bagni-chimici"]["chiusi-della-verna"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Chiusi della Verna", 
  locationNames: {label: "Chiusi della Verna", href: "chiusi-della-verna"} 
});

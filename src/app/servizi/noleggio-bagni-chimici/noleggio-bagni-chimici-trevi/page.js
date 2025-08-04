import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Trevi",
  canonical: links.servizi["noleggio-bagni-chimici"]["trevi"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Trevi", 
  locationNames: {label: "Trevi", href: "trevi"} 
});

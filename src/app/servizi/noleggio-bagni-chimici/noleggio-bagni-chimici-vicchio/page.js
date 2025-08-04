import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Vicchio",
  canonical: links.servizi["noleggio-bagni-chimici"]["vicchio"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Vicchio", 
  locationNames: {label: "Vicchio", href: "vicchio"} 
});

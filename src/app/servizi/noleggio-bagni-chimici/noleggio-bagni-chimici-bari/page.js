import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bari",
  canonical: links.servizi["noleggio-bagni-chimici"]["bari"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Bari", 
  locationNames: {label: "Bari", href: "bari"} 
});

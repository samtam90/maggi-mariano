import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ascoli Piceno",
  canonical: links.servizi["noleggio-bagni-chimici"]["ascoli-piceno"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Ascoli Piceno", 
  locationNames: {label: "Ascoli Piceno", href: "ascoli-piceno"} 
});

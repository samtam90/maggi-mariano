import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bettona",
  canonical: links.servizi["noleggio-bagni-chimici"]["bettona"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Bettona", 
  locationNames: {label: "Bettona", href: "bettona"} 
});

import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ancona",
  canonical: links.servizi["noleggio-bagni-chimici"]["ancona"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Ancona", 
  locationNames: {label: "Ancona", href: "ancona"} 
});

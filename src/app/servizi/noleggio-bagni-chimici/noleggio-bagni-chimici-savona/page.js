import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Savona",
  canonical: links.servizi["noleggio-bagni-chimici"]["savona"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Savona", 
  locationNames: {label: "Savona", href: "savona"} 
});

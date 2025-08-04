import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Verona",
  canonical: links.servizi["noleggio-bagni-chimici"]["verona"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Verona", 
  locationNames: {label: "Verona", href: "verona"} 
});

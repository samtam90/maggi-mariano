import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ogliastra",
  canonical: links.servizi["noleggio-bagni-chimici"]["ogliastra"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Ogliastra", 
  locationNames: {label: "Ogliastra", href: "ogliastra"} 
});

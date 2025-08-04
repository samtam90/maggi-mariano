import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rufina",
  canonical: links.servizi["noleggio-bagni-chimici"]["rufina"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Rufina", 
  locationNames: {label: "Rufina", href: "rufina"} 
});

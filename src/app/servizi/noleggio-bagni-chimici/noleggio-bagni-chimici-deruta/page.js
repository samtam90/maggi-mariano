import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Deruta",
  canonical: links.servizi["noleggio-bagni-chimici"]["deruta"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Deruta", 
  locationNames: {label: "Deruta", href: "deruta"} 
});
